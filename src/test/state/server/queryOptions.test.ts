import { describe, it, expect, vi } from 'vitest'
import { queries } from '~server/queryOptions'
import { fetchList, fetchInstance } from '~server/fetchers.ts'
import { skipToken } from '@tanstack/react-query'

vi.mock('~server/fetchers', () => ({
  fetchList: vi.fn().mockResolvedValue([]),
  fetchInstance: vi.fn().mockResolvedValue({}),
}))

describe('Query Options Tests', () => {
  it('genera keys', () => {
    const regiones = queries.regiones

    expect(regiones.allKey()).toEqual(['regiones'])
    expect(regiones.listKey()).toEqual(['regiones', 'list'])
    expect(regiones.detailKey()).toEqual(['regiones', 'detail'])
    // expect(regiones.detailKey()('123')).toEqual(['regiones', 'detail', '123'])
  })

  it('Llama fetchlist con keys', async () => {
    const regiones = queries.regiones
    const listQuery = regiones.list()

    await listQuery.queryFn()

    expect(fetchList).toHaveBeenCalledWith('regiones', expect.any(Object))
  })

  it('Llama fetchInstance con keys e id', async () => {
    const regiones = queries.regiones
    const detailQuery = regiones.detail('123')

    await detailQuery.queryFn()

    expect(fetchInstance).toHaveBeenCalledWith(
      'regiones',
      expect.any(Object),
      '123',
    )
  })

  it('Llama detail con id null', () => {
    const regiones = queries.regiones
    const detailQuery = regiones.detail(null)

    expect(detailQuery.queryFn).toBe(skipToken)
  })
})
