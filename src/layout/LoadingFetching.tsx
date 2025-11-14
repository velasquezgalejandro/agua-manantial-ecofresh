import type { FC } from 'react'
import { useIsFetching } from '@tanstack/react-query'

export const LoadingFetching: FC = () => {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null
}
