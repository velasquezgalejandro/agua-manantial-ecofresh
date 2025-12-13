import { describe, it, expect } from 'vitest'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { estacionesSlice, regionesSlice, sharedSlice } from '~client/slices'
import type { TFinalStoreStructure } from '~client/clientTypes'

// Creacion de store necesaria para test
const createTestStore = () =>
  create<TFinalStoreStructure>()(
    devtools(
      immer((...args) => ({
        ...estacionesSlice(...args),
        ...regionesSlice(...args),
        ...sharedSlice(...args),
      })),
    ),
  )

describe('accionesGenericas', () => {
  it('setSelectedId actualiza id', () => {
    const store = createTestStore()
    store.getState().estaciones.setSelectedId('123')
    expect(store.getState().estaciones.selectedId).toBe('123')
  })

  it('reserModel a initialState', () => {
    const store = createTestStore()
    store.setState((s) => {
      s.estaciones.selectedId = '123'
      s.estaciones.search = 'test'
    })

    store.getState().estaciones.resetModel()
    const state = store.getState().estaciones

    expect(state.selectedId).toBeNull()
    expect(state.search).toBeNull()
  })

  it('setSearch y selectedId', () => {
    const store = createTestStore()
    store.getState().estaciones.setSearchAndSelectedId('123')
    const estaciones = store.getState().estaciones

    expect(estaciones.selectedId).toBe('123')
    // expect(estaciones.search).toBe('123')
  })
})
