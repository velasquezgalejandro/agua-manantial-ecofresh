import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  useGetTimelineData,
  useGetTimelineDataList,
} from '~server/hooks/useGetTimeline'
import { useQuery } from '@tanstack/react-query'
import { getModelData, getModelDataList } from '~server/selectors'
import { queries } from '~server/queryOptions'
import { renderHook } from '@testing-library/react'
import { floatSafeRemainder } from 'node_modules/zod/v4/core/util.d.cts'

//mocks
vi.mock('~server/selectors', () => ({
  getModelData: vi.fn(),
  getModelDataList: vi.fn(),
}))

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}))

vi.mock('~server/queryOptions', () => ({
  queries: {
    'linea-tiempo': {
      list: vi.fn(),
    },
  },
}))

describe('useGetTimeline', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { foo: 'test' }
    const transformedData = { id: 1 }

    queries['linea-tiempo'].list.mockReturnValue({
      queryKey: ['timeline'],
      queryFn: vi.fn(),
    })

    getModelData.mockReturnValue(transformedData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetTimelineData())

    expect(queries['linea-tiempo'].list).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(transformedData)
  })
})

describe('useGetTimelineList', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { results: [] }
    const listData = [{ id: 1 }, { id: 2 }]

    queries['linea-tiempo'].list.mockReturnValue({
      queryKey: ['timeline'],
      queryFn: vi.fn(),
    })

    getModelDataList.mockReturnValue(listData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetTimelineDataList())

    expect(getModelDataList).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(listData)
  })
})
