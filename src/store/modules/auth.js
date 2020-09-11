import Auth from '@/apis/Auth'

// State
const state = () => ({
  //
})

// Getters
const getters = {
  //
}

// Actions
const actions = {
  login({
    commit,
    dispatch
  }, dataLogin) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.login(dataLogin)
        .then(response => {
          dispatch('changeIsLoading', false, {
            root: true
          })
          // commit('LOGIN_USER', response.data)
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

  //

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
