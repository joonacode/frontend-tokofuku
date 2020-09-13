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
  },
  updateProfile({
    dispatch
  }, {
    data,
    id
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.updateProfile(id, data).then(response => {
        resolve(response.data.results)
        dispatch('changeIsLoading', false, {
          root: true
        })
        dispatch('detailUser')
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  updateStore({
    dispatch
  }, {
    data,
    id
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.updateStore(id, data).then(response => {
        resolve(response.data.results)
        dispatch('changeIsLoading', false, {
          root: true
        })
        dispatch('detailUser')
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
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
