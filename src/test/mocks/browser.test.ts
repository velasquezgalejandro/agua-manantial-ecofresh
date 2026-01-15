import { describe, it, expect, vi } from 'vitest'

describe('browser mocks', () => {
  it('have mock', () => {
    expect(vi.isMockFunction(window.fetch)).toBe(true)
  })
})
