import { StartClient } from '@tanstack/react-start/client'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { enableMocking } from './mocks/enable'
import { queryClient } from '~routes/-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ScrollProvider } from '~context/ScrollContext'

async function main() {
  await enableMocking()

  hydrateRoot(
    document,
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ScrollProvider>
          <StartClient />
        </ScrollProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  )
}

main()
