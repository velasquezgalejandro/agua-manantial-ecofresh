import { useEffect } from 'react'

import { useSetLayout } from '~context/listStoreStates.ts'

export const LayoutController = () => {
  const setLayout = useSetLayout()

  const handleLayout = () => {
    const layout = {}

    return layout
  }

  useEffect(() => {
    const layout = handleLayout()
    setLayout(layout)
  }, [setLayout])

  return null
}
