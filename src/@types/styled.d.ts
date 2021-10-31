declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string
        secondary: string
        tone: {
          50: string
          100: string
          200: string
          300: string
          400: string
          500: string
          600: string
          700: string
          800: string
          900: string
        }
      }
      background: {
        primary: string
        secondary: string
        tone: {
          100: string
          200: string
          300: string
          400: string
          500: string
          600: string
          700: string
          800: string
          900: string
        }
      }
    },
    font: {
      family: string
    }
  }
}

export {}