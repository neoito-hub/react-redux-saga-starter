//Action Creator
export const types = {
  REQUEST_LOGIN: '[Login] Request login',
  LOGIN_SUCCESS: '[Login] Login Success',
  LOGIN_ERROR: '[Login] Login Error'
}

export const RequestLogin = ({ email, password }) => {
  return ({
  type: types.REQUEST_LOGIN,
  payload: {
    email,
    password
  }
})};
export const LoginSuccess = (user) => {
  return ({
  type: types.LOGIN_SUCCESS,
  payload: user
})};
export const LoginError = (error) => {
  return ({
  type: types.LOGIN_ERROR,
  payload: error
})};
