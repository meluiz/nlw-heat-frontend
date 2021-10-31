import React from 'react'

/* ------| Styles |------ */
import { Root } from './styles'

/* ------| Types |------ */
type ButtonPropsType = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}


export const Button = ({
  children,
  variant,
  type
}: ButtonPropsType) => {
  return (
    <Root variant={variant} type={type}>
      {children}
    </Root>
  )
}