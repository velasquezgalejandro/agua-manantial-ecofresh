import { expect, it, describe, vi, beforeEach } from 'vitest'
import { fetchList, fetchInstance} from '~server/fetchers'
import { object, array, string } from 'valibot'
import axios from 'axios'

// Schemas de ejemplo
const ItemSchema = object({
  id: string(),
  name: string(),
})

const ItemListSchema = array(ItemSchema)

let getMock: ReturnType<typeof vi.fn>

//TODO:  vi.mock() se ejecuta ANTES de cualquier otro código del archivo
//TODO: Tener en cuenta para futuros tests con llamadas a módulos externos
vi.mock('axios', () => {
  const get = vi.fn()

  return {
    default: {
      create: vi.fn(() => ({
        get,
      })),
      __getMock: get,
    },
  }
})

describe('fetchers', () => {
  beforeEach(() => {
    getMock = (axios as any).__getMock //TODO: Obtener el mock de get (axios es el módulo mockeado linea 24)
    vi.resetAllMocks() //Limpiar mocks antes de cada test
  })

  it('fetchList - éxito', async () => {
    getMock.mockResolvedValue({
      data: [{ id: '1', name: 'Item 1' }],
    })

    const result = await fetchList('items', ItemListSchema)

    expect(getMock).toHaveBeenCalledWith('/items')
    expect(result).toEqual([{ id: '1', name: 'Item 1' }])
  })

  it('fetchList - falla schema', async () => {
    getMock.mockResolvedValueOnce({
      data: [{ id: 123 }], // falta "name"
    })

    await expect(fetchList('items', ItemListSchema)).rejects.toThrow(
      'SCHEMA ERROR',
    )
  })

  it('fetchList - error de red', async () => {
    getMock.mockRejectedValueOnce(new Error('Network error'))

    await expect(fetchList('items', ItemListSchema)).rejects.toThrow(
      'Network error',
    )
  })

  it('no retorna data si el schema falla', async () => {
    getMock.mockResolvedValueOnce({
      data: { foo: 'bar' },
    })

    await expect(fetchInstance('items', ItemSchema, '1')).rejects.toThrow()
  })

  it('fetchInstance - éxito', async () => {
    getMock.mockResolvedValueOnce({
      data: { id: '1', name: 'Item 1' },
    })

    const result = await fetchInstance('items', ItemSchema, '1')

    expect(getMock).toHaveBeenCalledWith('/items/1')
    expect(result).toEqual({ id: '1', name: 'Item 1' })
  })
})
