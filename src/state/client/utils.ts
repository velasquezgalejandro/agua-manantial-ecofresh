import type { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

type WithSelectorsSlices<S> = S extends { getState: () => infer T }
  ? S & {
      use: {
        [K in keyof T]: T[K] extends object
          ? { [P in keyof T[K]]: () => T[K][P] }
          : () => T[K];
      };
    }
  : never;

export const createSelectorsSlices = <
  S extends UseBoundStore<StoreApi<object>>,
>(
  _store: S,
) => {
  const store = _store as WithSelectorsSlices<typeof _store>;
  store.use = {} as any;

  const state = store.getState();

  for (const sliceKey of Object.keys(state)) {
    const slice = state[sliceKey as keyof typeof state];

    if (typeof slice === 'object' && slice !== null) {
      // Create nested selectors for slice properties
      (store.use as any)[sliceKey] = {};

      for (const propKey of Object.keys(slice)) {
        (store.use as any)[sliceKey][propKey] = () =>
          store((s) => (s as any)[sliceKey][propKey]);
      }
    } else {
      // For non-object properties, create a direct selector
      (store.use as any)[sliceKey] = () =>
        store((s) => s[sliceKey as keyof typeof s]);
    }
  }

  return store;
};
