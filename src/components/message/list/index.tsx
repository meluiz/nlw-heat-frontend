import React from 'react'

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

export const MessageList = () => {
  return (
    <Root>
      <LogoFigure>
        <img src={LogoImage} alt="DoWhile 2021" />
      </LogoFigure>
      <Unordered>
        <ListItem>
          <Text>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</Text>
          <User>
            <UserAvatar>
              <UserFigure>
                <img src="https://github.com/meluiz.png" alt="Luiz Felipe" />
              </UserFigure>
            </UserAvatar>
            <UserName>Luiz Felipe</UserName>
          </User>
        </ListItem>
        <ListItem>
          <Text>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</Text>
          <User>
            <UserAvatar>
              <UserFigure>
                <img src="https://github.com/meluiz.png" alt="Luiz Felipe" />
              </UserFigure>
            </UserAvatar>
            <UserName>Luiz Felipe</UserName>
          </User>
        </ListItem>
        <ListItem>
          <Text>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</Text>
          <User>
            <UserAvatar>
              <UserFigure>
                <img src="https://github.com/meluiz.png" alt="Luiz Felipe" />
              </UserFigure>
            </UserAvatar>
            <UserName>Luiz Felipe</UserName>
          </User>
        </ListItem>
      </Unordered>
    </Root>
  )
}