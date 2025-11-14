import type { BreakpointOverrides } from '@mui/material/styles'

import type { FC, ReactNode } from 'react'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

type SectionContainerProps = {
  bgcolor?: string
  children: ReactNode
  height?: string
  maxWidthContainer?: keyof BreakpointOverrides
  sx?: Record<string, any>
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  bgcolor = 'background.layout',
  height = 'fit-content',
  maxWidthContainer = 'xxl',
  sx = {},
}) => (
  <Container disableGutters maxWidth={maxWidthContainer}>
    <Stack
      sx={{
        height,
        bgcolor,
        position: 'relative',
        width: '100%',
        py: 2,
        px: 3,
        overflow: 'clip',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Stack>
  </Container>
)
