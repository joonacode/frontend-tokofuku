import Api from './Api'

const BASE_URL = 'users'

export default {
  detail() {
    return Api.get(`${BASE_URL}/profile`)
  }
}
