declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string
      }
      background: {
        primary: string
        secondary: string
        tertiary: string
      }
    },
    font: {
      family: string
    }
  }
}

export {}