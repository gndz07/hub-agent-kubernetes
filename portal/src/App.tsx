import React from 'react'
import { FaencyProvider, globalCss } from '@traefiklabs/faency'
import PageLayout from 'components/PageLayout'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Service from 'components/Service'
import { getInjectedValues } from 'utils/getInjectedValues'
import { HelmetProvider } from 'react-helmet-async'

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
  // fetch(`/api/${catalogName}/services`)
  //   .then((resp) => resp.json())
  //   .then((services) => console.log('services', services))
  //   .catch((err) => console.error(err))

  return (
      <HelmetProvider>
        <FaencyProvider>
          <BrowserRouter>
            <PageLayout catalogName={catalogName}>
              <Routes />
            </PageLayout>
          </BrowserRouter>
        </FaencyProvider>
      </HelmetProvider>
  )
}

export default App
