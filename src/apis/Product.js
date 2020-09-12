import Api from './Api'

const BASE_URL = 'products'

export default {
  newProducts() {
    return Api.get(`${BASE_URL}?limit=8&sorting=desc`)
  },
  popularProducts() {
    return Api.get(`${BASE_URL}?limit=8&sorting=desc&order=watch`)
  },
  randomProducts() {
    return Api.get(`${BASE_URL}/random`)
  },
  productById(id) {
    return Api.get(`${BASE_URL}/${id}`)
  }
}
