import { useQuery } from '@tanstack/react-query'
import { queries } from '~server/queryOptions.ts'
import { getModelDataList, getModelData } from '~server/selectors.ts'

export const useGetEventosData = () => {
  return useQuery({
    ...queries.eventos.list(),
    select: (data) => {
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
