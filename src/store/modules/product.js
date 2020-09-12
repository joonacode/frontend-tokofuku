import Product from '@/apis/Product'

// State
const state = () => ({
  newProducts: [],
  popularProducts: [],
  randomProducts: [],
  detailProduct: {}
})

// Getters
const getters = {
  getNewProducts: (state) => state.newProducts,
  getPopularProducts: (state) => state.popularProducts,
  getRandomProducts: (state) => state.randomProducts,
  getDetailProduct: (state) => state.detailProduct
}

// Actions
const actions = {
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
  }
}

// Mutations
const mutations = {

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
    state.detailProduct = payload.results[0]
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
