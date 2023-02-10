import React from 'react'
import { FaencyProvider } from '@traefiklabs/faency'
import PageLayout from 'components/PageLayout'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Service from 'components/Service'

const { catalogName } = window as any

const Routes = () => {
  return (
    <RouterRoutes>
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
    <FaencyProvider>
      <BrowserRouter>
        <PageLayout catalogName={catalogName}>
          <Routes />
        </PageLayout>
      </BrowserRouter>
    </FaencyProvider>
  )
}

export default App
