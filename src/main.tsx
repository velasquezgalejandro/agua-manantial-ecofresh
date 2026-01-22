import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ScrollProvider } from '~context/ScrollContext'

import App from './App'
import './styles/fonts.css'
// import { queryClient } from './lib/queryClient'
import { queryClient } from '~routes/-router'

import 'leaflet/dist/leaflet.css'
// import './lib/leaflet'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')

    await worker.start({
      onUnhandledRequest: 'error',
    })
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ScrollProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ScrollProvider>
    </React.StrictMode>,
  )
})
