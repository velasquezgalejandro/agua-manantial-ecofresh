import { useQuery } from '@tanstack/react-query'
import { queries } from '~server/queryOptions.ts'
import { getModelDataList, getModelData } from '~server/selectors.ts'

export const useGetTimelineData = () => {
  return useQuery({
    ...queries['linea-tiempo'].list(),
    select: (data) => {
      return getModelData({ data })
    },
  })
}

export const useGetTimelineDataList = () => {
  return useQuery({
    ...queries['linea-tiempo'].list(),
    select: (data) => {
      return getModelDataList({ data })
    },
  })
}
