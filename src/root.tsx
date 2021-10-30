import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@src/styles/global"
import { theme } from '@src/styles/theme'
import { App } from "@src/App"

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}