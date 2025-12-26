import { describe, it, expect, vi } from 'vitest'
import { QueryClient } from '@tanstack/react-query'

// mocks
vi.mock('@/routeTree.gen', async () => {
  const { createRootRoute } = await import('@tanstack/react-router')

  const rootRoute = createRootRoute()

  return {
    routeTree: rootRoute,
  }
})

vi.mock('../state/server/createIDBStorage.ts', () => ({
  createIDBPersister: vi.fn(() => ({ type: 'idb-persister' })),
}))

import { router, queryClient, persister } from '~routes/-router'

describe('router config', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('crea un QueryClient con las opciones correctas', () => {
    expect(queryClient).toBeInstanceOf(QueryClient)
    const defaultOptions = queryClient.getDefaultOptions()
    expect(defaultOptions.queries?.staleTime).toBe(2 * 60 * 1000)
    expect(defaultOptions.queries?.gcTime).toBe(10 * 60 * 1000)
  })

  it('ejecuta onError del QueryCache', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    try {
      await queryClient.fetchQuery({
        queryKey: ['error-test'],
        queryFn: () => {
          throw new Error('boom')
        },
        retry: false,
      })
    } catch {
      // esperado
    }

    expect(spy).toHaveBeenCalledWith('Query Cache Error:', expect.any(Error))

    spy.mockRestore()
  })
})
