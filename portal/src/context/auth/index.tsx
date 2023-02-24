import { AuthReducer, initialState } from './reducer'
import { reloadSession } from './actions'
import React, { useEffect, useReducer, createContext } from 'react'

const AuthStateContext = createContext(initialState)
const AuthDispatchContext = createContext(null)

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState)

  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (token && !authState.isLoading && !authState.user?.username) dispatch({ type: 'REQUEST_LOGIN' })

  useEffect(() => {
    if (token) {
      reloadSession(dispatch, token, JSON.parse(user as string))
    }
  }, [token])

  return (
    <AuthStateContext.Provider value={{ ...authState }}>
      <AuthDispatchContext.Provider value={dispatch as any}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export default AuthProvider
