import React from 'react'
import { io } from 'socket.io-client'

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
  Text,
  Content
} from './styles'
import { clearTimeout } from 'timers'

/* ------| Types |------ */
type MessageType = {
  id: string
  message: string,
  user: {
    name: string,
    avatar_url: string
    avatar: string
  },
  created_at: string
}

const messagesQueue: MessageType[] = []
const socket = io('http://localhost:4000')
socket.on('new_message', (message: MessageType) => messagesQueue.push(message))
console.log(messagesQueue)
export const MessageList = () => {
  const [ messages, setMessage ] = React.useState<MessageType[]>([])

  React.useEffect(() => {
    const timing = setInterval(() => {
      console.log(messagesQueue[0])
      if (messagesQueue.length > 0) {
        setMessage(prev => [
          messagesQueue[0],
          prev[0],
          prev[1]
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  React.useEffect(() => {
    api.get<MessageType[]>('http://localhost:4000/messages/last/3').then(({ data }) => {
      setMessage(data)
    })
  }, [])

  return (
    <Root>
      <LogoFigure>
        <img src={LogoImage} alt="DoWhile 2021" />
      </LogoFigure>
      <Content>
        <Unordered>
          {messages && messages.map((message) => (
            <ListItem key={message.id}>
              <Text>{message.message}</Text>
              <User>
                <UserAvatar>
                  <UserFigure>
                    <img src={message.user.avatar_url || message.user.avatar} alt={message.user.name} />
                  </UserFigure>
                </UserAvatar>
                <UserName>{message.user.name}</UserName>
              </User>
            </ListItem>
          ))}
        </Unordered>
      </Content>
    </Root>
  )
}