import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Container not found')
}

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    return import('./mocks/browser').then(({ worker }) =>
      worker.start({
        onUnhandledRequest: 'bypass',
      }),
    )
  }

  return Promise.resolve()
}

const root = createRoot(container)

prepare().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
