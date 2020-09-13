import Address from '@/apis/Address'

// State
const state = () => ({
  allAddress: [],
  activeAddress: {}
})

// Getters
const getters = {
  getallAddress: (state) => state.allAddress,
  getActiveAddress: (state) => state.activeAddress
}

// Actions
const actions = {
  allAddress({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Address.all()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('ALL_ADDRESS', response.data)
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
  activeAddress({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Address.getActive()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('ACTIVE_ADDRESS', response.data)
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
  deleteAddress({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Address.delete(id)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          resolve(response.data)

          dispatch('activeAddress')
          dispatch('allAddress')
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  setActiveAddress({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Address.setActive(id)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          resolve(response.data)
          dispatch('activeAddress')
          dispatch('allAddress')
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  postAddress({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Address.post(data)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          resolve(response.data)
          dispatch('activeAddress')
          dispatch('allAddress')
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

  ALL_ADDRESS: (state, payload) => {
    state.allAddress = payload.results
  },
  ACTIVE_ADDRESS: (state, payload) => {
    state.activeAddress = payload.results[0]
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
