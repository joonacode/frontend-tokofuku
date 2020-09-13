import Api from './Api'

const BASE_URL = 'address'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  post(data) {
    return Api.post(`${BASE_URL}`, data)
  },
  update(data, id) {
    return Api.patch(`${BASE_URL}/${id}`, data)
  },
  setActive(id) {
    return Api.patch(`${BASE_URL}/set-active/${id}`)
  },
  getActive() {
    return Api.get(`${BASE_URL}/active`)
  },
  detail(id) {
    return Api.get(`${BASE_URL}/${id}`)
  },
  delete(id) {
    return Api.delete(`${BASE_URL}/${id}`)
  }
}
