import type { StateCreator } from 'zustand'
import type {
  TCustomActions,
  TFilterStore,
  TFinalStoreStructure,
  TModelKeys,
  TModelSlices,
  TSharedActions,
  TSliceState,
} from '~client/clientTypes.ts'
import { initialState, filterInitialState } from '~client/initialState.ts'

/**
 * Factory para crear un slice base
 */
export const createGenericSlice =
  <K extends TModelKeys>(
    sliceName: K,
    customActions?: K extends keyof TCustomActions
      ? (
          set: Parameters<
            StateCreator<
              TFinalStoreStructure,
              [['zustand/devtools', never], ['zustand/immer', never]],
              []
            >
          >[0],
        ) => TCustomActions[K]
      : never,
  ): StateCreator<
    TFinalStoreStructure,
    [['zustand/devtools', never], ['zustand/immer', never]],
    [],
    Pick<TModelSlices, K>
  > =>
  (set) => {
    const baseSlice = {
      ...initialState,
      setSelectedId: (selectedId: Exclude<TSliceState['selectedId'], null>) =>
        set(
          (state) => {
            state[sliceName].selectedId = selectedId
          },
          undefined,
          { type: `${sliceName}/setSelectedId`, payload: selectedId },
        ),
      setSelectedIds: (selectedIds: TSliceState['selectedIds']) =>
        set(
          (state) => {
            state[sliceName].selectedIds = selectedIds
          },
          undefined,
          { type: `${sliceName}/setSelectedIds`, payload: selectedIds },
        ),
      setSearch: (search: Exclude<TSliceState['search'], null>) =>
        set(
          (state) => {
            state[sliceName].search = search
          },
          undefined,
          { type: `${sliceName}/setSearch`, payload: search },
        ),
      setFilter: (filter: TSliceState['filter']) =>
        set(
          (state) => {
            state[sliceName].filter = filter
          },
          undefined,
          { type: `${sliceName}/setFilter`, payload: filter },
        ),
      setMeta: (meta: TSliceState['meta']) =>
        set(
          (state) => {
            state[sliceName].meta = meta
          },
          undefined,
          { type: `${sliceName}/setMeta`, payload: meta },
        ),
      resetSelectedId: () =>
        set(
          (state) => {
            state[sliceName].selectedId = initialState.selectedId
          },
          undefined,
          { type: `${sliceName}/resetSelectedId` },
        ),
      resetSelectedIds: () =>
        set(
          (state) => {
            state[sliceName].selectedIds = initialState.selectedIds
          },
          undefined,
          { type: `${sliceName}/resetSelectedIds` },
        ),
      resetSearch: () =>
        set(
          (state) => {
            state[sliceName].search = initialState.search
          },
          undefined,
          { type: `${sliceName}/resetSearch` },
        ),
      resetFilter: () =>
        set(
          (state) => {
            state[sliceName].filter = initialState.filter
          },
          undefined,
          { type: `${sliceName}/resetFilter` },
        ),
      resetMeta: () =>
        set(
          (state) => {
            state[sliceName].meta = initialState.meta
          },
          undefined,
          { type: `${sliceName}/resetMeta` },
        ),
      resetModel: () =>
        set(
          (state) => {
            Object.assign(state[sliceName], initialState)
          },
          undefined,
          { type: `${sliceName}/resetModel` },
        ),
    }

    const customActionsObj = customActions ? customActions(set) : {}

    return {
      [sliceName]: {
        ...baseSlice,
        ...customActionsObj,
      },
    } as Pick<TFinalStoreStructure, K>
  }

/* ------------------------------------------------------ */
/*                         Slices                         */
/* ------------------------------------------------------ */

/**
 * Almacena acciones compartidas entre modelos
 */
export const sharedSlice: StateCreator<
  TFinalStoreStructure,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  { shared: TSharedActions }
> = (set, _get, store) => ({
  shared: {
    resetAllModels: () => {
      set(store.getInitialState(), undefined, {
        type: 'shared/resetAllModels',
      })
    },
    resetMunicipioAndRegionSearch: () => {
      set(
        (state) => {
          state.estaciones.search = null
          state.estaciones.selectedId = null
          state.regiones.search = null
          state.regiones.selectedId = null
        },
        undefined,
        { type: 'shared/resetMunicipioAndRegionSearch' },
      )
    },
  },
})

export const filterSlice: StateCreator<
  TFilterStore,
  [
    ['zustand/persist', unknown],
    ['zustand/devtools', never],
    ['zustand/immer', never],
  ],
  [],
  TFilterStore
> = (set) => ({
  ...filterInitialState,
  setFilter: (key, value) => {
    set(
      (state) => {
        Object.assign(state, { [key]: value })
      },
      undefined,
      { type: `filter/${key}`, payload: value },
    )
  },
})

/**
 * Almacena acciones genéricas y específicas de modelos
 */
export const regionesSlice = createGenericSlice('regiones')
export const estacionesSlice = createGenericSlice('estaciones', (set) => ({
  setSearchAndSelectedId: (
    // selectedId: Exclude<TSliceState['selectedId'], null>, //TODO:
    selectedId: TSliceState['selectedId'],
  ) =>
    set(
      (state) => {
        state.estaciones.selectedId = selectedId
        state.estaciones.search = selectedId
      },
      undefined,
      { type: 'estaciones/setSearchAndSelectedId', payload: selectedId },
    ),
}))
