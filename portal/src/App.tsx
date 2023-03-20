import React, { useEffect } from 'react'
import { FaencyProvider, globalCss, lightTheme } from '@traefiklabs/faency'
import PageLayout from 'components/PageLayout'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Service from 'components/Service'
import { getInjectedValues } from 'utils/getInjectedValues'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const light = lightTheme('blue')

const bodyGlobalStyle = globalCss({
  body: {
    boxSizing: 'border-box',
    margin: 0,
  },
})

const { catalogName } = getInjectedValues()

const Routes = () => {
  return (
    <RouterRoutes>
      {bodyGlobalStyle()}
      <Route path="/" element={<Dashboard />} />
      <Route path="/:serviceName" element={<Service />} />
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
          <BrowserRouter>
            <PageLayout catalogName={catalogName}>
              <Routes />
            </PageLayout>
          </BrowserRouter>
        </FaencyProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
