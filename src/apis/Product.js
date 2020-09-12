import Api from './Api'

const BASE_URL = 'products'

export default {
  all(page = null, order = null, sorting = null, search = null) {
    return Api.get(`${BASE_URL}?limit=12&order=${order || 'id'}&sorting=${sorting || 'desc'}&page=${page || 1}${search ? '&search=' + search : ''}`)
  },
  allByCategory(idCategory, page = null, order = null, sorting = null, search = null) {
    return Api.get(`${BASE_URL}/by-category/?limit=12&idCategory=${idCategory}&order=${order || 'id'}&sorting=${sorting || 'desc'}&page=${page || 1}${search ? '&search=' + search : ''}`)
  },
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
