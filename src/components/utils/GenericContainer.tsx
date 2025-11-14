import { FC, ReactNode } from 'react'
import Container from '@mui/material/Container'

type TGenericContainerProps = {
  children: ReactNode
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  sx?: Record<string, any>
}

export const GenericContainer: FC<TGenericContainerProps> = ({
  children,
  maxWidth,
  sx,
}) => {
  return (
    <Container
      disableGutters
      maxWidth={maxWidth ?? false}
      sx={{ width: '100%', height: '100%', py: 4, px: 2, ...sx }}
    >
      {children}
    </Container>
  )
}
