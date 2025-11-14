import { StartClient } from '@tanstack/start'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>
  )
})
