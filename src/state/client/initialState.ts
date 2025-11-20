import type { TSliceState, TFilterState } from '~client/clientTypes.ts';

export const modelKeys = [
  'regiones',
  'estaciones',
  'municipios',
  'parametros',
  'secciones',
] as const;

export const initialState: TSliceState = {
  filter: [], // Array of ids on filtered instance
  meta: { instances: null, error: null, previousFetchWasInstance: false }, // Data fetched outside values in API
  search: null, // Value to search in data
  selectedId: null, // Current selected id of the model
  selectedIds: [], // Current selected ids of the model
};

export const filterInitialState: TFilterState = {
  themeMode: 'light',
};
