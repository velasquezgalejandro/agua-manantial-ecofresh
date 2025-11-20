import { create } from 'zustand';
import type { ExtractState } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import {
  sharedSlice,
  estacionesSlice,
  regionesSlice,
  filterSlice,
} from '~client/slices.ts';
import { createSelectors, createSelectorsSlices } from '~client/utils.ts';
import type {
  TFinalStoreStructure,
  TFilterStore,
} from '~client/clientTypes.ts';

const useStoreBase = create<TFinalStoreStructure>()(
  devtools(
    immer((...args) => ({
      ...estacionesSlice(...args),
      ...regionesSlice(...args),
      //
      ...sharedSlice(...args),
    })),
    { name: 'main', store: 'main' },
  ),
);

const useFilterBase = create<TFilterStore>()(
  persist(
    devtools(
      immer((...args) => ({
        ...filterSlice(...args),
      })),
      { name: 'filter', store: 'filter' },
    ),
    {
      name: 'filter-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useCustomStore = createSelectorsSlices(useStoreBase);
export const useFilterStore = createSelectors(useFilterBase);

export type CustomStore = ExtractState<typeof useCustomStore>;
export type FilterStore = ExtractState<typeof useFilterStore>;
