/** @jsxImportSource @emotion/react */
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { css, keyframes } from '@emotion/react'

export const LiquidButtons: FC<{
  label: string
  action: any
  buttonAnimationColor?: string
  sx?: Record<string, any>
}> = ({ label, sx, action, buttonAnimationColor }) => {
  const color = buttonAnimationColor ?? '#284cff'

  const fillUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`

  const liquidButtonStyles = css`
    position: relative;
    overflow: hidden;
    z-index: 0;
    isolation: isolate;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${color};
      transform: translateY(100%);
      transition: transform 0.4s ease;
      z-index: -1;
    }

    &:hover::before {
      animation: ${fillUp} 0.4s forwards;
    }
  `

  return (
    <Button
      css={liquidButtonStyles}
      onClick={action}
      sx={{
        border: `1px solid ${color}`,
        color: '#fff',
        backgroundColor: 'transparent',
        borderRadius: 4,
        ...sx,
      }}
    >
      {label}
    </Button>
  )
}
