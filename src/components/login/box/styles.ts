import styled, { css } from "styled-components"

/* ------| Medias |------ */
import BannerGirlImage from '@media/banner-girl.png'

export const Root = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 348px 72px 0;
  border: 1px solid rgba(255,255,255,.06);
  border-top: 0;
  border-bottom: 0;
  text-align: center;
  background-color: ${theme.colors.background.secondary};
  background-image: url(${BannerGirlImage});
  background-repeat: no-repeat;
  background-position: center -112px;

  strong {
    font-size: 32px;
    font-weight: 600;
    line-height: 36px;
  }

  @media screen and (min-width: 1536px) {
    padding: 440px 72px 0;
    background-position: center top;
  }
`}`

export const LinkGithub = styled.a`${({ theme }) => css`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 2px;
  margin-top: 32px;
  padding: 0 40px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  color: ${theme.colors.text.secondary};
  background-color: ${theme.colors.background.tertiary};

  &:hover {
    filter: brightness(.9);
  }
`}`