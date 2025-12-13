import { expect, it, describe } from 'vitest'
import { create } from 'zustand'
import { renderHook } from '@testing-library/react'
import { createSelectors, createSelectorsSlices } from '~client/utils'

describe('createSelector', () => {
  it('selectors para cada propiedad', () => {
    const store = create(() => ({
      count: 5,
      name: 'test',
    }))

    const storeWithSelector = createSelectors(store as any)

    const { result: count } = renderHook(() => storeWithSelector.use.count())

    const { result: name } = renderHook(() => storeWithSelector.use.name())

    expect(count.current).toBe(5)
    expect(name.current).toBe('test')
  })

  it('selectores en el cambio', () => {
    const store = create<{
      count: number
      inc: () => void
    }>((set) => ({ count: 0, inc: () => set((s) => ({ count: s.count + 1 })) }))

    const storeWithSelector = createSelectors(store)

    const { result: count } = renderHook(() => storeWithSelector.use.count())
    expect(count.current).toBe(0)

    store.getState().inc()

    const { result: countInc } = renderHook(() => storeWithSelector.use.count())
    expect(countInc.current).toBe(1)
  })
})

describe('createSelectorsSlices', () => {
  it('crea selectors anidados para slices', () => {
    const store = create(() => ({
      auth: {
        user: 'test',
        token: '123',
      },
      loading: false,
    }))

    const storeWithSelector = createSelectorsSlices(store)

    const { result: user } = renderHook(() => storeWithSelector.use.auth.user())
    const { result: token } = renderHook(() =>
      storeWithSelector.use.auth.token(),
    )
    const { result: loading } = renderHook(() =>
      storeWithSelector.use.loading(),
    )

    expect(user.current).toBe('test')
    expect(token.current).toBe('123')
    expect(loading.current).toBe(false)
  })

  it('actualiza selectors cuando cambia el estado', () => {
    const store = create<{
      auth: { user: string }
      setUser: (u: string) => void
    }>((set) => ({
      auth: { user: 'init' },
      setUser: (user) => set((s) => ({ auth: { ...s.auth, user } })),
    }))

    const storeWithSelector = createSelectorsSlices(store)

    const { result: initialUser } = renderHook(() =>
      storeWithSelector.use.auth.user(),
    )

    expect(initialUser.current).toBe('init')

    store.getState().setUser('new')

    const { result: newUser } = renderHook(() =>
      storeWithSelector.use.auth.user(),
    )

    expect(newUser.current).toBe('new')
  })
})
