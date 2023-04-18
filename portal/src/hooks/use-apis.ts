/*
Copyright (C) 2022-2023 Traefik Labs
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// import axios from 'axios'
import { useQuery } from 'react-query'
import { getInjectedValues } from 'utils/getInjectedValues'

const { portalName } = getInjectedValues()

export const useAPIs = () => {
  const fetchUrl = `/api/${portalName}/apis`

  return useQuery(
    fetchUrl,
    () =>
      fetch(fetchUrl, {
        redirect: 'manual',
      })
        .then((res) => {
          if (res.type === 'opaqueredirect') {
            location.reload()
          } else {
            return res.json()
          }
        })
        .catch((error) => console.log(error)),
    // axios
    //   .get(fetchUrl)
    //   .then(({ data }) => data)
    //   .catch((error) => console.log(error)),
  )
}
