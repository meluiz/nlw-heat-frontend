import styled, { css } from "styled-components"

export const Root = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  color: ${theme.colors.text.primary};
  font-family: ${theme.font.family};
  background-color: ${theme.colors.background.primary};
`}`