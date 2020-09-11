import Vue from 'vue'
import Vuex from 'vuex'

<<<<<<< HEAD
import globalStore from './globalStore.js'

// Module
import product from './modules/product.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  ...globalStore,
  modules: {
    product,
    auth
=======
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
  }
})
