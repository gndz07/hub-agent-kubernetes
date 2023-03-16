import axios from 'axios'
import { useQuery } from 'react-query'
import { getInjectedValues } from 'utils/getInjectedValues'

const { portalName } = getInjectedValues()

export const useServices = () => {
  const fetchUrl = `/api/${portalName}/apis`

  return useQuery(fetchUrl, () =>
    axios
      .get(fetchUrl)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
  )
}
