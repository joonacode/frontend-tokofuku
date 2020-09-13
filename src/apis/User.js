import Api from './Api'

const BASE_URL = 'users'

export default {
  detail() {
    return Api.get(`${BASE_URL}/profile`)
  },
  updateProfile(id, data) {
    return Api.patch(`${BASE_URL}/profile/${id}`, data)
  },
  updateStore(id, data) {
    return Api.patch(`${BASE_URL}/store/${id}`, data)
  }
}
