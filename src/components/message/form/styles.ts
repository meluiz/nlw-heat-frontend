import styled, { css } from "styled-components"

export const Root = styled.div`${({ theme }) => css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  border: 1px dashed ${theme.colors.background.tone[700]};
  position: relative;
  text-align: center;
  box-shadow: 0 0 12px rgba(0,0,0,0.6);
  background-color: ${theme.colors.background.tone[400]};
`}`

export const SignoutButton = styled.button`${({ theme }) => css`
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 24px; left: 24px;
  cursor: pointer;
  color: ${theme.colors.text.tone[400]};

  &:hover {
    color: ${theme.colors.text.tone[100]};
  }
`}`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.div`${({ theme }) => css`
  padding: 2px;
  border-radius: 9999px;
  background: linear-gradient(100deg, ${theme.colors.background.primary} 0%, ${theme.colors.background.secondary} 100%);
`}`

export const Figure = styled.figure`${({ theme }) => css`
  width: 94px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 4px solid ${theme.colors.background.tone[400]};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`}`

export const UserName = styled.strong`${({ theme }) => css`
  margin-top: 16px;
  line-height: 32px;
  font-size: 24px;
  color: ${theme.colors.text.primary};
`}`

export const UserGithub = styled.span`${({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: ${theme.colors.text.tone[300]};
`}`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;
  border-radius: 4px;
  overflow: hidden;
`

export const Label = styled.label`${({ theme }) => css`
  border: 1px dashed ${theme.colors.background.tone[700]};
  border-bottom: 0;
  padding: 18px 24px 28px;
  position: relative;
  text-align: left;
  color: ${theme.colors.text.tone[50]};
  font-size: 18px;
  font-weight: 600;
  background-color: ${theme.colors.background.tone[200]};

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 1px dashed ${theme.colors.background.tone[700]};
    border-bottom: 0; border-right: 0;
    border-radius: 4px 0 0 0;
    position: absolute;
    bottom: -10px; left: 24px;
    transform: rotate(45deg);
    background-color: ${theme.colors.background.tone[300]};
    z-index: 10;
  }
`}`

export const Textbox = styled.textarea`${({ theme }) => css`
  height: 112px;
  border: 1px dashed ${theme.colors.background.tone[700]};
  border-bottom: 0;
  padding: 16px 18px;
  position: relative;
  resize: none;
  line-height: 24px;
  color: ${theme.colors.text.tone[50]};
  font-size: 14px;
  font-family: ${theme.font.family};
  background-color: ${theme.colors.background.tone[300]};

  &:focus { outline: none }
  &::placeholder { color: ${theme.colors.text.tone[600]} }
`}`

export const FormFooter = styled.div`${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  border: 1px dashed ${theme.colors.background.tone[700]};
  border-top: 0;
  background-color: ${theme.colors.background.tone[300]};

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
    font-weight: 600;
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