import styled, { css } from "styled-components"

export const Root = styled.div`${({ theme }) => css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  position: relative;
  text-align: center;
  background-color: ${theme.colors.background.secondary};
`}`

export const SignoutButton = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 24px; left: 24px;
  cursor: pointer;
  color: rgba(255,255,255,.3);

  &:hover {
    filter: brightness(.9);
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.div`
  padding: 3px;
  border-radius: 9999px;
  background: linear-gradient(100deg, #ff008E 0%, #FFCD1E 100%);
`

export const Figure = styled.figure`${({ theme }) => css`
  width: 94px;
  height: 94px;
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

export const UserName = styled.strong`
  margin-top: 16px;
  line-height: 32px;
  font-size: 24px;
`

export const UserGithub = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: rgba(255,255,255,.3);
`

export const Form = styled.form`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;
  background-color: #202024;

  label {
    padding: 18px 24px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    background-color: #29292e;
  }

  textarea {
    height: 160px;
    border: 0;
    padding: 24px;
    resize: none;
    background-color: transparent;
    line-height: 24px;
    color: #e1e1e6;
    font-family: ${theme.font.family};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #8d8de9;
    }
  }

  button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    gap: 12px;
    border: 0;
    border-radius: 2px;
    margin: 24px;
    padding: 0 32px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    font-weight: 800;
    color: ${theme.colors.text.secondary};
    background-color: #ff008e;
    cursor: pointer;
    color: #fff;
    font-family: ${theme.font.family};

    &:hover {
      filter: brightness(.9);
    }
  }
`}`