import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  useGetRegionesData,
  useGetRegionesDataList,
  useGetRegionesInstanceById,
  useGetRegionesSelectedInstance,
} from '~server/hooks/useGetRegiones'
import { useQuery } from '@tanstack/react-query'
import { getModelData, getModelDataList } from '~server/selectors'
import { queries } from '~server/queryOptions'
import { renderHook } from '@testing-library/react'
import { queryClient } from '~routes/-router'
import { useCustomStore } from '~client/store'

// mocks
vi.mock('~server/selectors', () => ({
  getModelData: vi.fn(),
  getModelDataList: vi.fn(),
}))

vi.mock('@tanstack/react-query', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-query')>()

  return { ...actual, useQuery: vi.fn() }
})

vi.mock('~server/queryOptions', () => ({
  queries: {
    regiones: {
      list: vi.fn(),
      detail: vi.fn(),
      listKey: vi.fn(),
    },
  },
}))

vi.mock('~server/queryClient', () => ({
  queryClient: {
    getQueryData: vi.fn(),
  },
}))

vi.mock('~client/store', () => ({
  useCustomStore: {
    use: {
      regiones: {
        selectedId: vi.fn(),
      },
    },
  },
}))

vi.mock('~routes/-router.ts', () => ({
  queryClient: {
    getQueryData: vi.fn(),
  },
}))

describe('useGetRegiones', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { foo: 'test' }
    const transformedData = { id: 1 }

    queries.regiones.list.mockReturnValue({
      queryKey: ['regiones'],
      queryFn: vi.fn(),
    })

    getModelData.mockReturnValue(transformedData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetRegionesData())

    expect(queries.regiones.list).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(transformedData)
  })
})

describe('useGetRegionesList', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { results: [] }
    const listData = [{ id: 1 }, { id: 2 }]

    queries.regiones.list.mockReturnValue({
      queryKey: ['regiones'],
      queryFn: vi.fn(),
    })

    getModelDataList.mockReturnValue(listData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetRegionesDataList())

    expect(queries.regiones.list).toHaveBeenCalledOnce()
    expect(result.current.data).toEqual(listData)
  })
})

describe('useGetRegionesInstanceById', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna region por id', () => {
    const id = 'id'
    const cachedData = { '1': { id: 1, name: 'Region' } }

    queries.regiones.detail.mockReturnValue({
      queryKey: ['regiones', id],
      queryFn: vi.fn(),
    })

    queryClient.getQueryData.mockReturnValue(cachedData)

    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetRegionesInstanceById(id))

    expect(queries.regiones.detail).toHaveBeenCalledWith(id)
    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      queries.regiones.listKey(),
    ])
    expect(result.current.data).toEqual(cachedData[id])
  })

  it('retorna undefined si no hay id', () => {
    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
    }))

    const { result } = renderHook(() => useGetRegionesInstanceById(null))

    expect(result.current.data).toBeUndefined()
  })
})

describe('useGetRegionesSelectedInstance', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna region usando selectedId', () => {
    const selectedId = '1'
    const cacheData = {
      '1': { id: 1, name: 'Region' },
    }

    useCustomStore.use.regiones.selectedId.mockReturnValue(selectedId)

    queries.regiones.detail.mockReturnValue({
      queryKey: ['regiones', selectedId],
      queryFn: vi.fn(),
    })

    queryClient.getQueryData.mockReturnValue(cacheData)

    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetRegionesSelectedInstance())

    expect(useCustomStore.use.regiones.selectedId).toHaveBeenCalled()
    expect(queries.regiones.detail).toHaveBeenCalledWith(selectedId)
    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      queries.regiones.detail(selectedId),
    ])
    expect(result.current.data).toEqual(cacheData[selectedId])
  })

  it('retorna undefined si no hay id', () => {
    useCustomStore.use.regiones.selectedId.mockReturnValue(null)

    const { result } = renderHook(() => useGetRegionesSelectedInstance(null))

    expect(result.current.data).toBeUndefined()
  })
})
