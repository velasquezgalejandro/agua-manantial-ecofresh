import { describe, expect, it } from 'vitest'
import {
  getModelData,
  getModelDataById,
  getModelDataList,
} from '~server/selectors'

describe('getModelData', () => {
  it('array indexado', () => {
    const exampleData = {
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    }
    const result = getModelData(exampleData)

    expect(result).toEqual({
      '1': { id: 1, name: 'Item 1' },
      '2': { id: 2, name: 'Item 2' },
    })
  })

  it('array vacio', () => {
    const exampleData = { data: [] }
    const result = getModelData(exampleData)

    expect(result).toEqual({})
  })

  it('memoization', () => {
    const exampleData = {
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    }
    const result1 = getModelData(exampleData)
    const result2 = getModelData(exampleData)

    expect(result1).toBe(result2)
  })
})

describe('getModelDataList', () => {
  it('array ordenado por nombre', () => {
    const exampleData = {
      data: [
        { id: 1, nombre: 'C' },
        { id: 2, nombre: 'B' },
        { id: 3, nombre: 'A' },
      ],
    }
    const result = getModelDataList(exampleData)
    expect(result.map((x) => x.nombre)).toEqual(['A', 'B', 'C'])
  })

  it('array ordenado por clave personalizada', () => {
    const exampleData = {
      data: [
        { id: 1, valor: 30 },
        { id: 2, valor: 10 },
        { id: 3, valor: 20 },
      ],
    }
    const result = getModelDataList({ ...exampleData, key: 'valor' })
    expect(result.map((x) => x.valor)).toEqual([10, 20, 30])
  })

  it('Misma lista si no se puede ordenar', () => {
    const exampleData = {
      data: [
        { id: 1, otro: 'C' },
        { id: 2, otro: 'B' },
        { id: 3, otro: 'A' },
      ],
    }

    const result = getModelDataList({ data: exampleData, key: 'valor' })
    expect(result).toEqual(exampleData)
  })

  it('memoization', () => {
    const exampleData = {
      data: [
        { id: 1, nombre: 'C' },
        { id: 2, nombre: 'B' },
        { id: 3, nombre: 'A' },
      ],
    }
    const result1 = getModelDataList(exampleData)
    const result2 = getModelDataList(exampleData)

    expect(result1).toBe(result2)
  })
})

describe('getModelDataById', () => {
  it('obtener item por id existente', () => {
    const exampleData = {
      data: {
        '1': { id: 1, name: 'Item 1' },
        '2': { id: 2, name: 'Item 2' },
      },
      id: '1',
    }
    const result = getModelDataById(exampleData)
    expect(result).toEqual({ id: 1, name: 'Item 1' })
  })

  it('obtener item por id inexistente', () => {
    const exampleData = {
      data: {
        '1': { id: 1, name: 'Item 1' },
        '2': { id: 2, name: 'Item 2' },
      },
      id: '3',
    }
    const result = getModelDataById(exampleData)
    expect(result).toEqual({})
  })

  it('Obetener item por id undefined', () => {
    const exampleData = {
      data: {
        '1': { id: 1, name: 'Item 1' },
        '2': { id: 2, name: 'Item 2' },
      },
      id: undefined,
    }
    const result = getModelDataById(exampleData)
    expect(result).toEqual({})
  })

  it('memoization', () => {
    const exampleData = {
      data: {
        '1': { id: 1, name: 'Item 1' },
        '2': { id: 2, name: 'Item 2' },
      },
      id: '1',
    }
    const result1 = getModelDataById(exampleData)
    const result2 = getModelDataById(exampleData)

    expect(result1).toBe(result2)
  })
})
