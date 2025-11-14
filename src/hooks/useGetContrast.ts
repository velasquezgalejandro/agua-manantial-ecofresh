import { getContrastRatio, useTheme } from '@mui/material/styles'

export const useGetContrast = () => {
  const theme = useTheme()

  const getContrast = (
    colorInsideBackground: `#${string}`,
    colorIfMatchContrast = theme.palette.common.white,
    colorIfNotMatch = theme.palette.common.black,
    backgroundColor = '#FFFFFF',
    contrastFactor = 3,
  ) => {
    return getContrastRatio(colorInsideBackground, backgroundColor) >
      contrastFactor
      ? colorIfMatchContrast
      : colorIfNotMatch
  }

  return getContrast
}
