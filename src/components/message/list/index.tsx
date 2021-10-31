import React from 'react'

/* ------| Services |------ */
import { api } from '@services/api'

/* ------| Media |------ */
import LogoImage from '@media/logo.svg'

/* ------| Styles |------ */
import {
  Root,
  LogoFigure,
  Unordered,
  ListItem,
  UserFigure,
  User,
  UserAvatar,
  UserName,
  Text
} from './styles'

/* ------| Types |------ */
type MessageStateType = {
  id: string
  message: string,
  user: {
    name: string,
    avatar_url: string
  },
  created_at: string
}

export const MessageList = () => {
  const [ messages, setMessage ] = React.useState<MessageStateType[]>([])

  React.useEffect(() => {
    api.get<MessageStateType[]>('http://localhost:4000/messages/last/3').then(({ data }) => {
      setMessage(data)
    })
  }, [])

  return (
    <Root>
      <LogoFigure>
        <img src={LogoImage} alt="DoWhile 2021" />
      </LogoFigure>
      <Unordered>
        {messages && messages.map((message) => (
          <ListItem key={message.id}>
            <Text>{message.message}</Text>
            <User>
              <UserAvatar>
                <UserFigure>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </UserFigure>
              </UserAvatar>
              <UserName>{message.user.name}</UserName>
            </User>
          </ListItem>
        ))}
      </Unordered>
    </Root>
  )
}