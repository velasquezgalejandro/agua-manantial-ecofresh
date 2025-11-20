import { useQuery } from '@tanstack/react-query'
import { queries } from '~server/queryOptions.ts'
import { getModelDataList, getModelData } from '~server/selectors.ts'
import { useCustomStore } from '~client/store.ts'
import { queryClient } from '~routes/-router.ts'

export const useGetProductosData = () => {
  return useQuery({
    ...queries.productos.list(),
    select: (data) => {
      return getModelData({ data })
    },
  })
}

export const useGetProductosDataList = () => {
  return useQuery({
    ...queries.productos.list(),
    select: (data) => {
      return getModelDataList({ data })
    },
  })
}
