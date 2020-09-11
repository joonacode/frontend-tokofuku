import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Global component
import '@/globalComponents.js'

import VueToast from 'vue-toast-notification'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-toast-notification/dist/theme-default.css'
import swal from './components/mixins/swal'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
Vue.use(VueToast, {
  position: 'bottom-left'
})
Vue.mixin(swal)
// req.files multer multiple upload

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
