import { useQuery } from 'react-query'
import { getInjectedValues } from 'utils/getInjectedValues'

const { catalogName } = getInjectedValues()

export const useServices = () => {
  return useQuery('services', () => fetch(`/api/${catalogName}/services`).then((res) => res.json()))
}

export const useGetService = (serviceName: string) => {
  const fetchUrl = `/api/${catalogName}/services/${serviceName}`
  return useQuery(fetchUrl, () => fetch(fetchUrl).then((res) => res.json()))
}
