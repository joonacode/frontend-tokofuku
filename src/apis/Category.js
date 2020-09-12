import Api from './Api'

const BASE_URL = 'categories'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  detail(id) {
    return Api.get(`${BASE_URL}/${id}`)
  }
}
