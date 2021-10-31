import styled, { css } from "styled-components"

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`

export const LogoFigure = styled.figure`
  height: 14px;
  margin: 32px 0;
  position: absolute;
  top: 0; left: 0;

  img { height: 100% }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`

export const Unordered = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding-left: 32px;
  position: relative;
  list-style: none;
`

export const ListItem = styled.li`${({ theme }) => css`
  width: 100%;
  max-width: 420px;
  border: 1px dashed ${theme.colors.background.tone[500]};
  border-radius: 4px;
  background-color: ${theme.colors.background.tone[200]};

  &:nth-child(n+3) { display: none }

  @media screen and (min-height: 936px) {
    &:nth-child(n+3) {
      display: initial;
    }
  }
`}`

export const Text = styled.p`${({ theme }) => css`
  padding: 24px 24px 8px;
  line-height: 28px;
  color: ${theme.colors.text.tone[50]};
  font-size: 16px;
`}`

export const User = styled.div`${({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 14px;
  border-top: 1px dashed ${theme.colors.background.tone[500]};
  margin-top: 16px;
  padding: 14px 18px;
  background-color: ${theme.colors.background.tone[100]};
`}`

export const UserAvatar = styled.div`${({ theme }) => css`
  padding: 1px;
  border-radius: 9999px;
  box-shadow: 0 0 10px black;
`}`

export const UserFigure = styled.figure`${({ theme }) => css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`}`

export const UserName = styled.span`${({ theme }) => css`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.text.tone[500]};
`}`