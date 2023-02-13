import { useQuery } from 'react-query'
import { getInjectedValues } from 'utils/getInjectedValues'

const { catalogName } = getInjectedValues()

export const useServices = () => {
  return useQuery('services', () => fetch(`/api/${catalogName}/services`).then((res) => res.json()))
}
