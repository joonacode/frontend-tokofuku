import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from './globalStore.js'

// Module
import auth from './modules/auth.js'
import user from './modules/user.js'
import product from './modules/product.js'
import category from './modules/category.js'
import cart from './modules/cart.js'
import address from './modules/address.js'
import order from './modules/order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  ...globalStore,
  modules: {
    product,
    auth,
    user,
    category,
    cart,
    order,
    address
  }
})
