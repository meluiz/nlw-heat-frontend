declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string
      }
      background: {
        primary: string
        secondary: string
      }
    },
    font: {
      family: string
    }
  }
}

export {}