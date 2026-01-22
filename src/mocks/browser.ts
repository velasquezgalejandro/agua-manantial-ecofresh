import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

export async function startWorker() {
  await worker.start({
    serviceWorker: {
      url: '/agua-manantial-ecofresh/mockServiceWorker.js',
    },
  })
}
