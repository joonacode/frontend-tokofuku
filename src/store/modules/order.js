import Order from '@/apis/Order'

// State
const state = () => ({
  myOrders: []
})

// Getters
const getters = {
  getMyOrder: (state) => state.myOrders
}

// Actions
const actions = {
  myOrders({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Order.myOrder()
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('MY_ORDERS', response.data)
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
  myOrderStatus({
    commit,
    dispatch
  }, status) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Order.myOrderStatus(status)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          commit('MY_ORDERS', response.data)
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
  postOrder({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Order.post(data)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          resolve(response.data)
          dispatch('myOrders')
        })
        .catch(err => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          reject(err.response)
        })
    })
  },
  updateStatusOrder({
    commit,
    dispatch
  }, {
    status,
    id
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Order.updateStatus(status, id)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          resolve(response.data)
          dispatch('myOrders')
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

  MY_ORDERS: (state, payload) => {
    state.myOrders = payload.results
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
