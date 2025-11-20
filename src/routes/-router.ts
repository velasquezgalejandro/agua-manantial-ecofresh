import { QueryClient, QueryCache } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen.ts'
import { createIDBPersister } from '../state/server/createIDBStorage.ts'

const queryCache = new QueryCache({
  onError: (error) => {
    console.error('Query Cache Error:', error)
  },
})

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
})

export type TRouterContext = {
  queryClient: QueryClient
}

export const persister = createIDBPersister()

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,

  // defaultPreload: false,
  // defaultGcTime: 0,
  // defaultPreloadGcTime: 0,
  // defaultPreloadStaleTime: 0,
  // defaultStaleTime: 0,
  // context: {
  //   user: '',
  // },
})
