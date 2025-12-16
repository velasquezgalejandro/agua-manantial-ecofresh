import { describe, it, expect, beforeEach, vi } from 'vitest'

import {
  useGetMunicipiosData,
  useGetMunicipiosDataList,
  useGetMunicipiosInstanceById,
  useGetMunicipiosSelectedInstance,
} from '~server/hooks/useGetMunicipios'
import { useQuery } from '@tanstack/react-query'
import { getModelData, getModelDataList } from '~server/selectors'
import { queries } from '~server/queryOptions'
import { renderHook } from '@testing-library/react'
import { queryClient } from '~routes/-router.ts'
import { useCustomStore } from '~client/store'

// mocks tener cuidado con rutas (si ruta esta mal definida ejecuta el codigo real no el moc)
vi.mock('~server/selectors', () => ({
  getModelData: vi.fn(),
  getModelDataList: vi.fn(),
}))

// TODO: importacion necesario de esta forma para evitar error
vi.mock('@tanstack/react-query', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-query')>()

  return {
    ...actual,
    useQuery: vi.fn(),
  }
})

// vi.mock('@tanstack/react-query', () => ({
//   useQuery: vi.fn(),
// }))

vi.mock('~server/queryOptions', () => ({
  queries: {
    municipios: {
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
      municipios: {
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

describe('useGetMunicipios', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { foo: 'test' }
    const transformedData = { id: 1 }

    queries.municipios.list.mockReturnValue({
      queryKey: ['municipios'],
      queryFn: vi.fn(),
    })

    getModelData.mockReturnValue(transformedData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetMunicipiosData())

    expect(queries.municipios.list).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledOnce()
    expect(getModelData).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(transformedData)
  })
})

describe('useGetMunicipiosList', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna datos', () => {
    const rawData = { results: [] }
    const listData = [{ id: 1 }, { id: 2 }]

    queries.municipios.list.mockReturnValue({
      queryKey: ['municipios'],
      queryFn: vi.fn(),
    })

    getModelDataList.mockReturnValue(listData)

    useQuery.mockImplementation(({ select }) => ({
      data: select(rawData),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetMunicipiosDataList())
    expect(getModelDataList).toHaveBeenCalledWith({ data: rawData })
    expect(result.current.data).toEqual(listData)
  })
})

describe('useGetMunicipiosInstanceById', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna municipio desde cache por id', () => {
    const id = '1'
    const cacheData = {
      '1': { id: 1, name: 'Medellín' },
    }

    queries.municipios.detail.mockReturnValue({
      queryKey: ['municipios', id],
      queryFn: vi.fn(),
    })

    queryClient.getQueryData.mockReturnValue(cacheData)

    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
      isSuccess: true,
      isLoading: false,
    }))

    const { result } = renderHook(() => useGetMunicipiosInstanceById(id))

    expect(queries.municipios.detail).toHaveBeenCalledWith(id)
    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      queries.municipios.listKey(),
    ])
    expect(result.current.data).toEqual(cacheData[id])
  })

  it('retorna undefined si no hay id', () => {
    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
    }))

    const { result } = renderHook(() => useGetMunicipiosInstanceById(null))

    expect(result.current.data).toBeUndefined()
  })
})

describe('useGetMunicipiosSelectedInstance', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('retorna municipio usando selectedId', () => {
    const selectedId = '1'
    const cacheData = {
      '1': { id: 1, name: 'Medellin' },
    }

    useCustomStore.use.municipios.selectedId.mockReturnValue(selectedId)

    queries.municipios.detail.mockReturnValue({
      queryKey: ['municipios', selectedId],
      queryFn: vi.fn(),
    })

    queryClient.getQueryData.mockReturnValue(cacheData)

    useQuery.mockImplementation(({ initialData }) => ({
      data: initialData(),
      isLoading: false,
      isSuccess: true,
    }))

    const { result } = renderHook(() => useGetMunicipiosSelectedInstance())

    expect(useCustomStore.use.municipios.selectedId).toHaveBeenCalled()
    expect(queries.municipios.detail).toHaveBeenCalledWith(selectedId)
    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      queries.municipios.detail(selectedId),
    ])
    expect(result.current.data).toEqual(cacheData[selectedId])
  })

  it('retorna undefined si no hay id', () => {
    useCustomStore.use.municipios.selectedId.mockReturnValue(null)

    const { result } = renderHook(() => useGetMunicipiosSelectedInstance(null))

    expect(result.current.data).toBeUndefined()
  })
})
