import { createTheme } from '@mui/material/styles'

import { baseTheme } from '~layout/ThemeProvider/baseTheme.ts'
import '~layout/ThemeProvider/themeInterfaces.ts'

export const customTheme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#ffffff',
          'path:focus': { outline: 'none' },
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#0c0d3d',
            boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)',
          },
          '*::-webkit-scrollbar-track:hover': {
            backgroundColor: '#12145a',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#0078b7',
            border: '2px solid transparent',
            backgroundClip: 'content-box',
            borderRadius: 8,
            transition: 'background-color 0.3s, border-color 0.3s, border 0.3s',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#9ea5d6',
            backgroundClip: 'content-box',
            transition: 'background-color 0.3s, border-color 0.3s',
          },
          '*::-webkit-scrollbar-corner': {
            backgroundColor: 'auto',
          },
          '*::-webkit-scrollbar-corner:hover': {
            backgroundColor: 'auto',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiIconButton: {
      defaultProps: { disableRipple: true },
    },
    MuiToggleButton: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: { variant: 'contained', disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       variants: [
    //         {
    //           props: { variant: 'caption' },
    //           style: {
    //             color: '#ff0000',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  },
})
