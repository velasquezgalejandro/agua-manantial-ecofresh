import type { modelKeys } from '~client/initialState.ts';

/* ------------------------------------------------------ */
/*                    BASE MODEL TYPES                    */
/* ------------------------------------------------------ */
export type TModelKeys = (typeof modelKeys)[number];
export type TSliceState = {
  filter: string[]; // Array of ids on filtered instance
  meta: {
    [key: string]: unknown;
    error: string | null;
    instances: number | null;
  }; // Data fetched outside values array of API
  search: string | null; // Value to search in data
  selectedId: string | null; // Current selected id of the model
  selectedIds: string[]; // Current selected ids of the model
};

type TSliceActions = {
  resetFilter: () => void;
  resetMeta: () => void;
  resetModel: () => void;
  resetSearch: () => void;
  resetSelectedId: () => void;
  resetSelectedIds: () => void;
  setFilter: (filter: TSliceState['filter']) => void;
  setMeta: (meta: TSliceState['meta']) => void;
  setSearch: (search: TSliceState['search']) => void;
  setSelectedId: (selectedId: TSliceState['selectedId']) => void;
  setSelectedIds: (selectedIds: TSliceState['selectedIds']) => void;
};

type TEstacionesCustomActions = {
  setSearchAndSelectedId: (selectedId: TSliceState['selectedId']) => void;
};

export type TCustomActions = {
  estaciones: TEstacionesCustomActions;
};

export type TSharedActions = {
  resetMunicipioAndRegionSearch: () => void;
  resetAllModels: () => void; // WARNING: Cuando se comenta no hay error en el slice
};

type TStoreStructure = Record<TModelKeys, TSliceState & TSliceActions>;

type TAddCustomActions<T> = {
  [K in keyof T]: K extends keyof TCustomActions
    ? T[K] & TCustomActions[K]
    : T[K];
};

export type TModelSlices = TAddCustomActions<TStoreStructure>;
export type TFinalStoreStructure = TModelSlices & {
  shared: TSharedActions;
};

/* ------------------------------------------------------ */
/*                      FILTER MODEL                      */
/* ------------------------------------------------------ */
type TThemeMode = 'light' | 'dark';

export type TFilterState = {
  themeMode: TThemeMode;
};

export type TFilterStore = TFilterState & {
  setFilter: <K extends keyof TFilterState>(
    key: K,
    value: TFilterState[K],
  ) => void;
};
