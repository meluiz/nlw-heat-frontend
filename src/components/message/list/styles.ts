import styled, { css } from "styled-components"

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const LogoFigure = styled.figure`
  height: 28px;
  margin: 32px 0;

  img {
    height: 100%;
  }
`

export const Unordered = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 40px;
  list-style: none;
`

export const ListItem = styled.li`
  max-width: 512px;
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 4px;
  background-color: rgba(0,0,0,.3);

  &:nth-child(2) {
    margin-left: 80px;
  }

  &:nth-child(n+3) {
    display: none;
  }

  @media screen and (min-height: 936px) {
    &:nth-child(n+3) {
      display: initial;
    }
  }
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 28px;
  padding: 24px 24px 18px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-top: 1px solid rgba(255,255,255,.06);
  margin-top: 16px;
  padding: 14px 18px;
  background-color: rgba(0,0,0,.3);
`

export const UserAvatar = styled.div`
  padding: 2px;
  border-radius: 9999px;
  background: linear-gradient(100deg, #ff008E 0%, #FFCD1E 100%);
`

export const UserFigure = styled.figure`${({ theme }) => css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 3px solid ${theme.colors.background.primary};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`}`

export const UserName = styled.span`
  font-size: 16px;
`