import styled, { css } from "styled-components"

/* ------| Medias |------ */
import BannerGirlImage from '@media/banner-girl.png'

export const Root = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  min-height: 0;
  position: relative;
  overflow: hidden;
  border: 1px dashed ${theme.colors.background.tone[500]};
  border-top: 0; border-bottom: 0;
`}`

export const Light = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  background: radial-gradient(circle at 0% 40%, ${theme.colors.background.primary}, rgba(255,255,255,0) 40%),
              radial-gradient(circle at 102% 32%, ${theme.colors.background.secondary}, rgba(255,255,255,0) 40%);

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    opacity: .75;
    backdrop-filter: blur(150px);
    background-color: ${theme.colors.background.tone[200]};
  }
`}`

export const Wrapper = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 348px 72px 0;
  text-align: center;
  background-image: url(${BannerGirlImage});
  background-repeat: no-repeat;
  background-position: center -112px;
  z-index: 10;
  position: relative;

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
  background-color: ${theme.colors.background.secondary};

  &:hover {
    filter: brightness(.9);
  }
`}`