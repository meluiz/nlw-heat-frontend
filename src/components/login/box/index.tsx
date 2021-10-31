import React from 'react'

/* ------| Contexts |------ */
import { AuthContext } from '@contexts/auth'

/* ------| Components |------ */
import { VscGithubInverted } from 'react-icons/vsc'

/* ------| Styles |------ */
import { LinkGithub, Root } from './styles'

export const LoginBox = () => {
  const { signinUrl } = React.useContext(AuthContext)
  return (
    <Root>
      <strong>Envie e compartilhe sua mensagem</strong>
      <LinkGithub href={signinUrl}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </LinkGithub>
    </Root>
  )
}