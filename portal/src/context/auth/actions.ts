import axios from 'axios'

export const handleLogIn = async (dispatch, payload) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const { data } = await axios.post('/login', payload)

    const token = data.accessToken
    const user = data.user
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    axios.defaults.headers.common.Authorization = `Bearer ${token}`

    dispatch({ payload: { user, token }, type: 'LOGIN_SUCCESS' })
  } catch (error) {
    console.error(error)
    dispatch({ error, type: 'LOGIN_ERROR' })
  }
}

export const reloadSession = async (dispatch, token, user) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    dispatch({ payload: { token, user }, type: 'LOGIN_SUCCESS' })
  } catch (error) {
    await handleLogOut(dispatch)
  }
}

export const handleLogOut = async (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  delete axios.defaults.headers.common.Authorization
  dispatch({ type: 'LOGOUT' })
}
