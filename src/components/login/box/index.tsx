import React from 'react'

/* ------| Contexts |------ */
import { AuthContext } from '@contexts/auth'

/* ------| Components |------ */
import { Button } from '@ui/button'
import { VscGithubInverted } from 'react-icons/vsc'

/* ------| Styles |------ */
import { GithubLink, Light, Root, Text, Wrapper } from './styles'

export const LoginBox = () => {
  const { signinUrl } = React.useContext(AuthContext)
  return (
    <Root>
      <Light />
      <Wrapper>
        <Text>Envie e compartilhe sua mensagem</Text>
        <GithubLink href={signinUrl} as="a">
          <VscGithubInverted size={24} />
          Entrar com Github
        </GithubLink>
      </Wrapper>
    </Root>
  )
}