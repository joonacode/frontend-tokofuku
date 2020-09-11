import Api from './Api'

const BASE_URL = 'auth'

export default {
  register(data) {
    return Api.post(`${BASE_URL}/signup`, data)
  },
  login(data) {
    return Api.post(`${BASE_URL}/login`, data)
  },
  forgotPassword(data) {
    return Api.post(`${BASE_URL}/request-reset-password`, data)
  },
  verifyResetPassword(data) {
    return Api.post(`${BASE_URL}/verify-reset-password`, data)
  },
  resetPassword(data) {
    return Api.post(`${BASE_URL}/reset-password`, data)
  },
  refreshToken(data) {
    return Api.post(`${BASE_URL}/refresh-token`, data)
  },
  verifyAccount(token) {
    return Api.post(`${BASE_URL}/verify-account`, token)
  }
}
