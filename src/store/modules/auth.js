/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */
import Api from '@/apis/Api'
import Auth from '@/apis/Auth'
import Vue from 'vue'
import router from '@/router'

// State
const state = () => ({
  token: localStorage.getItem('token') || null
})

// Getters
const getters = {
  isLogin: (state) => !!state.token
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
          commit('LOGIN_USER', response.data)
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
  register({
    dispatch
  }, dataRegister) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.register(dataRegister)
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
  },
  forgotPassword({
    dispatch
  }, dataUser) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.forgotPassword(dataUser)
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
  },
  verifyResetPassword({
    dispatch
  }, token) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.verifyResetPassword(token)
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
  },
  resetPassword({
    dispatch
  }, newPassword) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.resetPassword(newPassword)
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
  },
  verifyAccount({
    dispatch
  }, token) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Auth.verifyAccount(token)
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
  },
  interceptorsRequest({
    state
  }) {
    Api.interceptors.request.use(
      function (config) {
        config.headers.Authorization = `Bearer ${state.token}`
        return config
      },
      function (error) {
        console.log(error)
        return Promise.reject(error)
      }
    )
  },
  interceptorsResponse({
    state,
    rootState,
    commit,
    dispatch,
    getters
  }) {
    Api.interceptors.response.use(function (response) {
      return response
    }, function (err) {
      const {
        error,
        status_code
      } = err.response.data
      if (error === 'Token invalid' && status_code === 401) {
        commit('LOGOUT_USER')
        Vue.$toast.error('Opps... Your token invalid!')
        router.push({
          name: 'Login'
        })
      } else if (error === 'Token expired' && status_code === 401) {
        Vue.$toast.error('Your session is expired refresh the browser or logout')
        dispatch('logoutUser')
        router.push({
          name: 'Home'
        })
      } else if (error === 'Only admins can access' && status_code === 403) {
        Vue.$toast.error('Opps... You not have permission!')
        router.push({
          name: 'Home'
        })
      }
      return Promise.reject(err)
    })
  },
  logoutUser({
    commit
  }) {
    commit('LOGOUT_USER')
  }
}

// Mutations
const mutations = {

  LOGIN_USER: (state, data) => {
    const {
      token
    } = data.results
    localStorage.setItem('token', token)
    state.token = token
  },
  LOGOUT_USER: state => {
    localStorage.clear()
    state.token = null
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
