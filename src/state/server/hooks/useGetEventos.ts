import { useQuery } from '@tanstack/react-query'
import { queries } from '~server/queryOptions.ts'
import { getModelDataList, getModelData } from '~server/selectors.ts'
import { useCustomStore } from '~client/store.ts'
import { queryClient } from '~routes/-router.ts'

export const useGetEventosData = () => {
  return useQuery({
    ...queries.eventos.list(),
    select: (data) => {
      console.log({ aqui: 'aqui', data })
      return getModelData({ data })
    },
  })
}

export const useGetEventosDataList = () => {
  return useQuery({
    ...queries.eventos.list(),
    select: (data) => {
      return getModelDataList({ data })
    },
  })
}
