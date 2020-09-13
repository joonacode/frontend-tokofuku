import Api from './Api'

const BASE_URL = 'orders'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  post(data) {
    return Api.post(`${BASE_URL}`, data)
  },
  myOrder() {
    return Api.post(`${BASE_URL}/myorder`)
  }
}
