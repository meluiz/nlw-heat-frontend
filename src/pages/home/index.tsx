import React from "react"

/* ------| Contexts |------ */
import { AuthContext } from "@src/contexts/auth"

/* ------| Components |------ */
import { Wrapper } from "@src/ui/layout"
import { MessageList } from "@src/components/message/list"
import { LoginBox } from "@src/components/login/box"
import { MessageForm } from "@src/components/message/form"

/* ------| Styles |------ */
import { Container, Root } from './styles'

export function Home() {
  const { user } = React.useContext(AuthContext)
  return (
    <Wrapper>
      <Root>
        <Container>
          <MessageList />
          { !!user ? <MessageForm /> : <LoginBox /> }
        </Container>
      </Root>
    </Wrapper>
  )
}