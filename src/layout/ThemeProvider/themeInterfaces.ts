declare module '@mui/material/styles' {
  interface Theme {
    firstCharCase: () => { textTransform: string }
    maxRows: (
      rows: number,
      factor: number,
      forceRows: boolean,
    ) => Record<string, unknown>
  }

  interface BreakpointOverrides {
    xs: true
    sm: true
    smh: true
    md: true
    mdh: true
    lg: true
    lgh: true
    xl: true
    xlh: true
    xxl: true
    xxxl: true
  }
  interface CommonColors {
    border: string
    g05: string
    g10: string
    g15: string
    g20: string
    g25: string
    g30: string
    g35: string
    g40: string
    g45: string
    g50: string
    g55: string
    g60: string
    g65: string
    g70: string
    g75: string
    g80: string
    g85: string
    g90: string
    g95: string
    b01: string
    b02: string
    b03: string
    b04: string
    b05: string
    w01: string
    w02: string
    w03: string
    w04: string
    w05: string
  }

  interface TypeBackground {
    layout: string
  }

  interface ZIndex {
    loading: number
  }
}
