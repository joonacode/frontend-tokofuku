// state
const state = {
  isLoading: false
}

// getters
const getters = {
  getLoading: (state) => state.isLoading
}

// actions
const actions = {
  changeIsLoading({
    commit
  }, status) {
    commit('CHANGE_IS_LOADING', status)
  }
}

// mutations
const mutations = {
  CHANGE_IS_LOADING: (state, status) => {
    state.isLoading = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
