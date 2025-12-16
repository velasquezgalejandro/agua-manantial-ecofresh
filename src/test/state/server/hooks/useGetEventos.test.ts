import { describe, it, expect, vi, beforeEach } from 'vitest'

import {
  useGetEventosData,
  useGetEventosDataList,
} from '~server/hooks/useGetEventos'
import { useQuery } from '@tanstack/react-query'
import { getModelData, getModelDataList } from '~server/selectors'
import { queries } from '~server/queryOptions'
import { renderHook } from '@testing-library/react'

// mocks tener cuidado con rutas (si ruta esta mal definida ejecuta el codigo real no el moc)
vi.mock('~server/selectors', () => ({
  getModelData: vi.fn(),
  getModelDataList: vi.fn(),
}))

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}))

vi.mock('~server/queryOptions', () => ({
  queries: {
    eventos: {
      list: vi.fn(),
    },
  },
}))

describe('useGetEvents', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { foo: 'test' }
    const transformedData = { id: 1 }

    queries.eventos.list.mockReturnValue({
      queryKey: ['eventos'],
      queryFn: vi.fn(),
    })

    getModelData.mockReturnValue(transformedData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetEventosData())

    expect(queries.eventos.list).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(transformedData)
  })
})

describe('useGetEventsList', () => {
  it('retorna datos', () => {
    const rawData = { results: [] }
    const listData = [{ id: 1 }, { id: 2 }]

    queries.eventos.list.mockReturnValue({
      queryKey: ['eventos'],
      queryFn: vi.fn(),
    })

    getModelDataList.mockReturnValue(listData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetEventosDataList())

    expect(getModelDataList).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(listData)
  })
})
