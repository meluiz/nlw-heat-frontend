import React from 'react'

/* ------| Components |------ */
import { VscGithubInverted } from 'react-icons/vsc'

/* ------| Styles |------ */
import { LinkGithub, Root } from './styles'

export const LoginBox = () => {
  return (
    <Root>
      <strong>Envie e compartilhe sua mensagem</strong>
      <LinkGithub href="#">
        <VscGithubInverted size={24} />
        Entrar com Github
      </LinkGithub>
    </Root>
  )
}