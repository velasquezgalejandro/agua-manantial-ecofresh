import { describe, it, expect } from 'vitest'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {
  estacionesSlice,
  regionesSlice,
  sharedSlice,
  filterSlice,
} from '~client/slices'
import type { TFinalStoreStructure } from '~client/clientTypes'
import { i } from 'node_modules/vite/dist/node/chunks/moduleRunnerTransport'

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

// TODO: para covertura total es necesario hacer todas las funciones existentes en la store

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

  it('setSelectedIds acutaliza ids', () => {
    const store = createTestStore()
    store.getState().estaciones.setSelectedIds(['1', '2', '3'])
    expect(store.getState().estaciones.selectedIds).toEqual(['1', '2', '3'])
  })

  it('setSearch actualiza search', () => {
    const store = createTestStore()
    store.getState().estaciones.setSearch('test')
    expect(store.getState().estaciones.search).toBe('test')
  })

  it('setFilter actualiza filter', () => {
    const store = createTestStore()
    store.getState().estaciones.setFilter('test')
    expect(store.getState().estaciones.filter).toBe('test')
  })

  it('setMeta actualiza meta', () => {
    const store = createTestStore()
    const newMeta = {
      instances: ['1', '2'],
      error: null,
      previousFetchWasInstance: true,
    }

    store.getState().estaciones.setMeta(newMeta)
    expect(store.getState().estaciones.meta).toEqual(newMeta)
  })

  it('resetSelectedId resetea id', () => {
    const store = createTestStore()
    store.setState((s) => {
      s.estaciones.selectedId = '123'
    })

    store.getState().estaciones.resetSelectedId()
    const state = store.getState().estaciones

    expect(state.selectedId).toBeNull()
  })

  it('resetSelectedIds resetea selectedids', () => {
    const store = createTestStore()
    store.setState((s) => {
      s.estaciones.selectedIds = ['1', '2', '3']
    })

    store.getState().estaciones.resetSelectedIds()
    const state = store.getState().estaciones

    expect(state.selectedIds).toEqual([])
  })

  it('resetSearch resetea search', () => {
    const store = createTestStore()
    store.getState((s) => {
      s.estaciones.search = 'test'
    })

    store.getState().estaciones.resetSearch()
    const state = store.getState().estaciones
    expect(state.search).toBeNull()
  })

  it('resetFilter resetea filter', () => {
    const store = createTestStore()
    store.getState((s) => {
      s.estaciones.filter = ['test']
    })

    store.getState().estaciones.resetFilter()
    const state = store.getState().estaciones
    expect(state.filter).toEqual([])
  })

  it('resetMeta resetea meta', () => {
    const store = createTestStore()
    const initialMeta = {
      instances: null,
      error: null,
      previousFetchWasInstance: false,
    }
    const newMeta = {
      instances: ['1', '2'],
      error: null,
      previousFetchWasInstance: true,
    }

    store.getState((s) => {
      s.estaciones.meta = newMeta
    })

    store.getState().estaciones.resetMeta()
    const state = store.getState().estaciones
    expect(state.meta).toEqual(initialMeta)
  })
})

// meta: { instances: null, error: null, previousFetchWasInstance: false }

describe('customActions', () => {
  it('setSearch y selectedId custom', () => {
    const store = createTestStore()
    store.getState().estaciones.setSearchAndSelectedId('123')
    const estaciones = store.getState().estaciones

    expect(estaciones.selectedId).toBe('123')
    expect(estaciones.search).toBe('123')
  })
})

describe('sharedActions', () => {
  it('limpiar search y selected id en estaciones y regiones', () => {
    const store = createTestStore()

    store.setState((s) => {
      s.estaciones.search = 'test'
      s.estaciones.selectedId = '1'
      s.regiones.search = 'test2'
      s.regiones.selectedId = '2'
    })

    store.getState().shared.resetMunicipioAndRegionSearch()

    const state = store.getState()

    expect(state.estaciones.search).toBeNull()
    expect(state.estaciones.selectedId).toBeNull()
    expect(state.regiones.search).toBeNull()
    expect(state.regiones.selectedId).toBeNull()
  })

  it('reset todos los modelos', () => {
    const store = createTestStore()

    store.setState((s) => {
      s.estaciones.search = 'test'
      s.regiones.search = 'test-1'
    })

    store.getState().shared.resetAllModels()

    const state = store.getState()

    expect(state.estaciones.search).toBeNull()
    expect(state.regiones.search).toBeNull()
  })
})

describe('filterStore', () => {
  it('setFilter', () => {
    const store = create<any>()(
      devtools(
        immer((...args) => ({
          ...filterSlice(...args),
        })),
      ),
    )

    store.getState().setFilter('search', 'test')

    expect(store.getState().search).toBe('test')
  })
})
