import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  useGetProductosData,
  useGetProductosDataList,
} from '~server/hooks/useGetProductos'
import { useQuery } from '@tanstack/react-query'
import { getModelData, getModelDataList } from '~server/selectors'
import { queries } from '~server/queryOptions'
import { renderHook } from '@testing-library/react'

// mocks
vi.mock('~server/selectors', () => ({
  getModelData: vi.fn(),
  getModelDataList: vi.fn(),
}))

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}))

vi.mock('~server/queryOptions', () => ({
  queries: {
    productos: {
      list: vi.fn(),
    },
  },
}))

describe('useGetProductos', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { foo: 'test' }
    const transformedData = { id: 1 }

    queries.productos.list.mockReturnValue({
      queryKey: ['productos'],
      queryFn: vi.fn(),
    })

    getModelData.mockReturnValue(transformedData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetProductosData())

    expect(queries.productos.list).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(transformedData)
  })
})

describe('', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { results: [] }
    const listData = [{ id: 1 }, { id: 2 }]
    queries.productos.list.mockReturnValue({
      queryKey: ['productos'],
      queryFn: vi.fn(),
    })

    getModelDataList.mockReturnValue(listData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetProductosDataList())

    expect(getModelDataList).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(listData)
  })
})
