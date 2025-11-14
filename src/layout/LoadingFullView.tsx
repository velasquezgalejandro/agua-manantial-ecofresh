import type { FC } from 'react'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export const LoadingFullView: FC<{ bgcolor?: string }> = ({
  bgcolor = 'background.layout',
}) => {
  return (
    <Backdrop invisible open sx={{ bgcolor }}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}
