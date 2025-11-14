import type { FC, ReactElement } from 'react'
import { useMemo } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'

import { useGetContrast } from '~hooks/useGetContrast.ts'
import { customTheme } from '~layout/ThemeProvider/customTheme.ts'

type TThemeProps = {
  children: ReactElement
}

const useCustomTheme = () => {
  const getContrast = useGetContrast()

  const notSelect = () => ({
    WebkitUserSelect: 'none',
    userSelect: 'none',
  })

  const firstCharCase = () => ({
    '&::first-letter': { textTransform: 'uppercase' },
  })

  const maxRows = (rows = 2, factor = 1.5, forceRows = true) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: ' ellipsis',
    WebkitLineClamp: rows,
    ...(forceRows
      ? {
          height: `${factor * rows}em`,
          lineHeight: `${factor}em`,
        }
      : {}),
  })

  const hoverItem = () => ({
    '&:hover': {
      cursor: 'pointer',
    },
  })

  const customFunctionsTheme = useMemo(
    () =>
      createTheme(customTheme, {
        firstCharCase,
        getContrast,
        maxRows,
        notSelect,
        hoverItem,
        cssVariables: true,
      }),
    [getContrast],
  )

  const responsiveTheme = responsiveFontSizes(customFunctionsTheme, {
    breakpoints: ['xs', 'sm', 'smh', 'md', 'mdh', 'lg', 'lgh', 'xl'],
    factor: 3,
  })

  return responsiveTheme
}

export const ThemeProvider: FC<TThemeProps> = ({ children }) => {
  const customTheme = useCustomTheme()
  const cssVariablesTheme = createTheme(customTheme, { cssVariables: true })

  return (
    <MuiThemeProvider theme={cssVariablesTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
