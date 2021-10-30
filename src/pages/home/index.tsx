/* ------| Components |------ */
import { Wrapper } from "@src/ui/layout"
import { MessageList } from "@src/components/message/list"
import { LoginBox } from "@src/components/login/box"

/* ------| Styles |------ */
import { Root } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Root>
        <MessageList />
        <LoginBox />
      </Root>
    </Wrapper>
  )
}