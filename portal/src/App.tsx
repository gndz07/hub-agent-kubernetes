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

import React, { useEffect, useMemo } from 'react'
// import axios from 'axios'
import { FaencyProvider, globalCss, lightTheme } from '@traefiklabs/faency'
import PageLayout from 'components/PageLayout'
import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import API from 'pages/API'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from 'react-query'

import ToastPool from 'components/ToastPool'
import { ToastProvider } from 'context/toasts'
import { useAPIs } from 'hooks/use-apis'
import EmptyState from 'pages/EmptyState'
import Settings from 'pages/Settings'

// axios global setup
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response == null) {
//       // location.reload()
//       // window.location.href = error.request
//       // alert('A network error occurred. '
//       //     + 'This could be a CORS issue or a dropped internet connection. '
//       //     + 'It is not possible for us to know.')
//     }
//     return Promise.reject(error)
//   },
// )

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request)
//     return request
//   },
//   (err) => {
//     return Promise.reject(err)
//   },
// )
// axios.interceptors.response.use((response) => {
//   if (response && response.status === 302) {
//     console.log('baa')
//   }

//   return response
// })

const queryClient = new QueryClient()

const light = lightTheme('blue')

const bodyGlobalStyle = globalCss({
  body: {
    boxSizing: 'border-box',
    margin: 0,
  },
})

// const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
//   const { isLoggedIn } = useAuthState()

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />
//   }

//   return <PageLayout>{children}</PageLayout>
// }

const Routes = () => {
  const { data: apis } = useAPIs()

  const defaultRoute = useMemo(() => {
    if (apis?.collections) {
      for (let i = 0; i < apis.collections.length; i++) {
        if (apis.collections[i].apis?.length) {
          return apis.collections[i].apis[0].specLink
        }
      }
    }

    return apis?.apis?.[0]?.specLink
  }, [apis])

  return (
    <RouterRoutes>
      {bodyGlobalStyle()}
      <Route
        path="/"
        element={
          defaultRoute ? (
            <Navigate to={defaultRoute} replace />
          ) : (
            <PageLayout>
              <EmptyState />
            </PageLayout>
          )
        }
      />
      <Route
        path="/apis/:apiName"
        element={
          <PageLayout>
            <API />
          </PageLayout>
        }
      />
      <Route
        path="/collections/:collectionName/apis/:apiName"
        element={
          <PageLayout>
            <API />
          </PageLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <PageLayout hasCard={false}>
            <Settings />
          </PageLayout>
        }
      />
    </RouterRoutes>
  )
}

const App = () => {
  useEffect(() => {
    document.body.classList.add(light.toString())
  }, [])

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <FaencyProvider>
            <BrowserRouter>
              <>
                <Routes />
                <ToastPool />
              </>
            </BrowserRouter>
          </FaencyProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ToastProvider>
  )
}

export default App
