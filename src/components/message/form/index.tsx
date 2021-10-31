import React from 'react'

/* ------| Contexts |------ */
import { AuthContext } from '@src/contexts/auth'

/* ------| Components |------ */
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'

/* ------| Services |------ */
import { api } from '@services/api'

/* ------| Styles |------ */
import {
  Avatar,
  Figure,
  Form,
  Header,
  Root,
  SignoutButton,
  UserGithub,
  UserName
} from './styles'

export const MessageForm = () => {
  const { user, signout } = React.useContext(AuthContext)
  const [ message, setMessage ] = React.useState('')

  const handleMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.trim()) return

    await api.post('messages', { message })
    setMessage('')
  }

  return (
    <Root>
      <SignoutButton onClick={signout} type="button">
        <VscSignOut size={28} />
      </SignoutButton>
      <Header>
        <Avatar>
          <Figure>
            <img src={user?.avatar_url} alt={user?.name} />
          </Figure>
        </Avatar>
        <UserName>{user?.name}</UserName>
        <UserGithub>
          <VscGithubInverted size={16} />
          {user?.login}
        </UserGithub>
      </Header>
      <Form onSubmit={handleMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        <button type="submit">Enviar mensagem</button>
      </Form>
    </Root>
  )
}