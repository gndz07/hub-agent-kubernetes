import React, { useEffect } from 'react'
import { FaencyProvider, globalCss, lightTheme } from '@traefiklabs/faency'
import PageLayout from 'components/PageLayout'
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Service from 'components/Service'
import { getInjectedValues } from 'utils/getInjectedValues'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from 'react-query'
import LogIn from 'components/auth/LogIn'
import AuthProvider, { useAuthState } from 'context/auth'

const queryClient = new QueryClient()

const light = lightTheme('blue')

const bodyGlobalStyle = globalCss({
  body: {
    boxSizing: 'border-box',
    margin: 0,
  },
})

const { catalogName } = getInjectedValues()

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  // TODO fix user auth mechanism
  const { isLoggedIn } = useAuthState()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  // authorized so return child components
  return <PageLayout catalogName={catalogName}>{children}</PageLayout>
}

const Routes = () => {
  return (
    <RouterRoutes>
      {bodyGlobalStyle()}
      <Route path="/login" element={<LogIn catalogName={catalogName as string} />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/:serviceName"
        element={
          <PrivateRoute>
            <Service />
          </PrivateRoute>
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
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <FaencyProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </AuthProvider>
        </FaencyProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
