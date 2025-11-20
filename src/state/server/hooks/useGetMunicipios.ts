import { useQuery } from '@tanstack/react-query';
import { queries } from '~server/queryOptions.ts';
import { getModelDataList, getModelData } from '~server/selectors.ts';
import { useCustomStore } from '~client/store.ts';
import { queryClient } from '~routes/-router.ts';

export const useGetMunicipiosData = () => {
  return useQuery({
    ...queries.municipios.list(),
    select: (data) => {
      return getModelData({ data });
    },
  });
};

export const useGetMunicipiosDataList = () => {
  return useQuery({
    ...queries.municipios.list(),
    select: (data) => {
      return getModelDataList({ data });
    },
  });
};

export const useGetMunicipiosInstanceById = (id: string | null) => {
  return useQuery({
    ...queries.municipios.detail(id),
    initialData: () => {
      const modelData = queryClient.getQueryData([
        queries.municipios.listKey(),
      ]);
      if (modelData && typeof modelData === 'object' && id) {
        return modelData?.[id as string];
      }
      return undefined;
    },
  });
};

export const useGetMunicipiosSelectedInstance = () => {
  const selectedId = useCustomStore.use.municipios.selectedId();

  return useQuery({
    ...queries.municipios.detail(selectedId),
    initialData: () => {
      const modelData = queryClient.getQueryData([
        queries.municipios.detail(selectedId),
      ]);
      if (modelData && typeof modelData === 'object' && selectedId) {
        return modelData?.[selectedId as string];
      }
      return undefined;
    },
  });
};
