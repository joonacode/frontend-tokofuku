import Product from '@/apis/Product'

// State
const state = () => ({
  allProducts: [],
  newProducts: [],
  myProducts: [],
  popularProducts: [],
  randomProducts: [],
  detailProduct: {},
  currentPage: 1,
  totalProduct: 0,
  totalPages: 0,
  showSearch: false,
  searchInputText: '',
  ordering: {
    order: 'id',
    sort: 'desc'
  }
})

// Getters
const getters = {
  getAllProducts: (state) => state.allProducts,
  getNewProducts: (state) => state.newProducts,
  getPopularProducts: (state) => state.popularProducts,
  getRandomProducts: (state) => state.randomProducts,
  getDetailProduct: (state) => state.detailProduct,
  getMyProducts: (state) => state.myProducts
}

// Actions
const actions = {
  allProducts({
    commit,
    dispatch
  }, {
    page,
    order,
    sort,
    search
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.all(page, order, sort, search)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('ALL_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          commit('ALL_PRODUCTS', err.response)
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  allCategoryProducts({
    commit,
    dispatch
  }, {
    idCategory,
    page,
    order,
    sort,
    search
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.allByCategory(idCategory, page, order, sort, search)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('ALL_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          commit('ALL_PRODUCTS', err.response)
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  myProducts({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.myProduct()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('MY_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          commit('MY_PRODUCTS', err.response)
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  newProducts({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.newProducts()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('NEW_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  popularProducts({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.popularProducts()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('POPULAR_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  randomProducts({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.randomProducts()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('RANDOM_PRODUCTS', response.data)
          resolve(response.data)
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  detailProduct({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.productById(id)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('DETAIL_PRODUCT', response.data)
          resolve(response.data)
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  postProduct({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Product.post(data)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          dispatch('myProducts')
          resolve(response.data)
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  }
}

// Mutations
const mutations = {

  ALL_PRODUCTS: (state, payload) => {
    if (payload.error) {
      state.totalPages = 0
      state.totalProduct = 0
      state.allProducts = []
    } else {
      state.allProducts = payload.results
      state.totalPages = payload.total_pages
      state.totalProduct = payload.total
    }
  },
  MY_PRODUCTS: (state, payload) => {
    if (payload.error) {
      state.myProducts = []
    } else {
      state.myProducts = payload.results
    }
  },
  NEW_PRODUCTS: (state, payload) => {
    state.newProducts = payload.results
  },
  POPULAR_PRODUCTS: (state, payload) => {
    state.popularProducts = payload.results
  },
  RANDOM_PRODUCTS: (state, payload) => {
    state.randomProducts = payload.results
  },
  DETAIL_PRODUCT: (state, payload) => {
    const result = payload.results[0]
    state.detailProduct = {
      ...result,
      colorArr: result.color.split(', '),
      sizeArr: result.size.split(', ')
    }
  },
  UPDATE_SEARCH_INPUT_TEXT: (state, data) => {
    state.searchInputText = data
  },

  CHANGE_ORDERING: (state, data) => {
    state.ordering.sort = data.sort
    state.ordering.order = data.order
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
