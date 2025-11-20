import { useQuery } from '@tanstack/react-query';
import { queries } from '~server/queryOptions.ts';
import { getModelDataList, getModelData } from '~server/selectors.ts';
import { useCustomStore } from '~client/store.ts';
import { queryClient } from '~routes/-router.ts';

export const useGetRegionesData = () => {
  return useQuery({
    ...queries.regiones.list(),
    select: (data) => {
      return getModelData({ data });
    },
  });
};

export const useGetRegionesDataList = () => {
  return useQuery({
    ...queries.regiones.list(),
    select: (data) => {
      return getModelDataList({ data });
    },
  });
};

export const useGetRegionesInstanceById = (id: string | null) => {
  return useQuery({
    ...queries.regiones.detail(id),
    initialData: () => {
      const modelData = queryClient.getQueryData([queries.regiones.listKey()]);
      if (modelData && typeof modelData === 'object' && id) {
        return modelData?.[id as string];
      }
      return undefined;
    },
  });
};

export const useGetRegionesSelectedInstance = () => {
  const selectedId = useCustomStore.use.regiones.selectedId();

  return useQuery({
    ...queries.regiones.detail(selectedId),
    initialData: () => {
      const modelData = queryClient.getQueryData([
        queries.regiones.detail(selectedId),
      ]);
      if (modelData && typeof modelData === 'object' && selectedId) {
        return modelData?.[selectedId as string];
      }
      return undefined;
    },
  });
};
