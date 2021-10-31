import styled, { css } from "styled-components"

import GridImage from '@media/grid.svg'

export const Root = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-image: url(${GridImage});


  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 128px;
    position: absolute;
  }

  &::before {
    top: 0; left: 0;
    background: linear-gradient(to bottom, ${theme.colors.background.tone[300]}, rgba(0,0,0,0));
  }

  &::after {
    bottom: 0; left: 0;
    background: linear-gradient(to top, ${theme.colors.background.tone[300]}, rgba(0,0,0,0));
  }
`}`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 100;
`