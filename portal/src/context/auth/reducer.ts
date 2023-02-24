export const initialState: {
  // TODO confirm how user and error object would look like
  user:
    | {
        username: string
      }
    | undefined
  error: any
  isLoading: boolean
  token: string
  isLoggedIn: boolean
} = {
  user: undefined,
  error: null,
  isLoading: false,
  token: '',
  isLoggedIn: false,
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        isLoading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        isLoading: false,
        token: action.payload.token,
        isLoggedIn: true,
      }
    case 'LOGOUT':
      return {
        ...initialState,
        user: undefined,
        token: '',
        isLoggedIn: false,
      }

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        user: undefined,
        error: action.error,
        isLoading: false,
        token: '',
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
