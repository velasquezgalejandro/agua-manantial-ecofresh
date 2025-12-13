import { describe, it, expect } from 'vitest'
import { useCustomStore, useFilterStore } from '~client/store'

describe('stores', () => {
  it('expone selectors en customStore', () => {
    expect(useCustomStore).toBeDefined()
  })

  it('expone selectors en filterStore', () => {
    expect(useFilterStore).toBeDefined()
  })
})
