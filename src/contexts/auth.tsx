import React from "react"

/* ------| Services |------ */
import { api } from "@src/services/api"

/* ------| Types |------ */
type AuthProviderType = {
  children: React.ReactNode
}

type UserType = {
  id: string
  name: string
  avatar_url: string
  login: string
}

type AuthContextDataType = {
  user: UserType | null
  signinUrl: string
  signout: () => void
}

type AuthResponseType = {
  token: string 
  user: {
    id: string
    name: string
    avatar_url: string
    login: string
  }
}

export const AuthContext = React.createContext({} as AuthContextDataType)
export const AuthProvider = ({ children }: AuthProviderType) => {
  const [ user, setUser ] = React.useState<UserType | null>(null)

  const signinUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=8a7244e093e233c2cc04`

  const signin = async (code: string) => {
    const response = await api.post<AuthResponseType>('authenticate', {
      code
    })

    const { token, user } = response.data
    
    localStorage.setItem('@dowhile:token', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    setUser(user)
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  React.useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get<UserType>('profile').then(response => setUser(response.data))
    }
  }, [])

  React.useEffect(() => {
    const url = new URL(window.location.href)
    const githubCode = url.searchParams.get('code')
    if (githubCode) {
      window.history.pushState({}, '', window.location.origin)
      signin(githubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signinUrl, user, signout }}>
      {children}
    </AuthContext.Provider>
  )
}