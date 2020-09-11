import User from '@/apis/User'

// state
const state = {
  user: {}
}

// getters
const getters = {
  getDetailUser: (state) => state.user
}

// actions
const actions = {

  detailUser({
    commit
  }) {
    return new Promise((resolve, reject) => {
      User.detail().then(response => {
        resolve(response.data)
        commit('GET_DETAIL_USER', response.data)
      }).catch(err => {
        reject(err.response)
      })
    })
  }

}

// mutations
const mutations = {

  GET_DETAIL_USER: (state, payload) => {
    state.user = payload.results
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
