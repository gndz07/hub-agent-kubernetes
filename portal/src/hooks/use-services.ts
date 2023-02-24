import axios from 'axios'
import { useQuery } from 'react-query'
import { getInjectedValues } from 'utils/getInjectedValues'

const { catalogName } = getInjectedValues()

export const useServices = () => {
  const fetchUrl = `/api/${catalogName}/services`

  return useQuery(fetchUrl, () =>
    axios
      .get(fetchUrl)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
  )
}
