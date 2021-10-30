import React from "react"

/* ------| Styles |------ */
import { Root } from "./styles"

/* ------| Types |------ */
type WrapperPropsType = {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperPropsType) {
  return (
    <Root>
      { children }
    </Root>
  )
}