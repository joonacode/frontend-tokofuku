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
    return Api.get(`${BASE_URL}/myorder`)
  },
  myOrderStatus(status) {
    return Api.get(`${BASE_URL}/status/${status}`)
  },
  updateStatus(status, id) {
    return Api.patch(`${BASE_URL}/status/${id}`, {
      status
    })
  }
}
