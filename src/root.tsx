import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@src/styles/global"
import { theme } from '@src/styles/theme'
import { App } from "@src/App"
import { AuthProvider } from "./contexts/auth"

export const Root = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AuthProvider>
  )
}