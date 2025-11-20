import { memoize } from 'proxy-memoize';

// INFO: selectors inside select of the useQuery does not execute if the data
// is undefine, so that the reason not undefined checks are needed it

export const getModelData = memoize(
  <T extends Array<{ id: string | number }>>(payload: { data: T }) => {
    return payload.data.reduce(
      (acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      },
      {} as Record<string, T[number]>,
    );
  },
);

export const getModelDataList = memoize(
  <T extends Array<{ id: string | number }>>(payload: {
    data: T;
    key?: string;
  }) => {
    const dataArray = payload.data;
    const key = payload.key ?? 'nombre';

    if (dataArray.length > 0 && key in dataArray[0]) {
      return [...dataArray].sort((a, b) => {
        return a[key as keyof typeof a] < b[key as keyof typeof b]
          ? -1
          : a[key as keyof typeof a] > b[key as keyof typeof b]
            ? 1
            : 0;
      });
    }

    return payload.data;
  },
);

export const getModelDataById = memoize(
  <T>(payload: { data: T; id: string | number | undefined }) => {
    if (
      payload.data &&
      payload.id &&
      typeof payload.data === 'object' &&
      payload.id in payload.data
    ) {
      return payload.data[payload.id] as T[keyof T];
    }
    return {} as T[keyof T];
  },
);
