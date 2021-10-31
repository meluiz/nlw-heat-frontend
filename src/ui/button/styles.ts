import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from "styled-components"

/* ------| Types |------ */
type ButtonPropsType = {
  theme: DefaultTheme
  variant?: 'primary' | 'secondary'
}

type ButtonThemeType = (theme: DefaultTheme, variant?: 'primary' | 'secondary') => string | FlattenSimpleInterpolation

/* ------| Theme |------ */
const buttonTheme: ButtonThemeType = (theme, variant) => {
  switch (variant) {
    case 'primary': return `
      min-height: 56px;
      border-radius: 2px;
      padding: 0 40px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 900;
      font-family: ${theme.font.family};
      color: ${theme.colors.text.secondary};
      background-color: ${theme.colors.background.secondary};

      &:hover { filter: brightness(.9) }
    `
    break;
    case 'secondary': return css`
    
    `
    default: return css`
    
    `
  }
}

const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0;
  background: transparent;
  cursor: pointer;
`

export const Root = styled(DefaultButton)<ButtonPropsType>`${({ theme, variant }) => css`
  ${buttonTheme(theme, variant)}
`}`