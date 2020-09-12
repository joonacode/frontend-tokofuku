import Category from '@/apis/Category'

// State
const state = () => ({
  categories: [],
  category: {}
})

// Getters
const getters = {
  getCategories: (state) => state.categories,
  getDetailCategory: (state) => state.category
}

// Actions
const actions = {
  allCategories({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Category.all()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('ALL_CATEGORIES', response.data)
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
  detailCategory({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Category.detail(id)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('DETAIL_CATEGORY', response.data)
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

  ALL_CATEGORIES: (state, payload) => {
    state.categories = payload.results
  },
  DETAIL_CATEGORY: (state, payload) => {
    state.category = payload.results[0]
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
