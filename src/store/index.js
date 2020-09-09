import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from './globalStore.js'

// Module
import product from './modules/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  ...globalStore,
  modules: {
    product
  }
})
