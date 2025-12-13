import { describe, it, expect, beforeEach } from 'vitest'
import type { PersistedClient } from '@tanstack/react-query-persist-client'
import { createIDBPersister } from '~server/createIDBStorage'

describe('createIDBPersister', () => {
  let persister: ReturnType<typeof createIDBPersister>

  const mockClient: PersistedClient = {
    timestamp: Date.now(),
    buster: 'test',
    clientState: {
      queries: [],
      mutations: [],
    },
  }

  beforeEach(async () => {
    persister = createIDBPersister()
    await persister.removeClient() // Limpiar antes de cada test
  })

  it('persistClient guarda el estado', async () => {
    await persister.persistClient(mockClient)

    const restored = await persister.restoreClient()
    expect(restored).toEqual(mockClient)
  })

  it('restoreClient devuelve undefined si no hay data', async () => {
    const restored = await persister.restoreClient()
    expect(restored).toBeUndefined()
  })

  it('removeClient elimina el estado', async () => {
    await persister.persistClient(mockClient)
    await persister.removeClient()

    const restored = await persister.restoreClient()
    expect(restored).toBeUndefined()
  })
})
