import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/login/Login.vue'
import ResetPassword from '../views/auth/resetPassword/ResetPassword.vue'
import ConfirmPassword from '../views/auth/resetPassword/ConfirmPassword.vue'
import DetailProduct from '../components/organizm/detailproduct.vue'
import Chat from '../components/organizm/Chat.vue'
import Chatempety from '../components/organizm/ChatEmpety.vue'
import SellingProduct from '../components/organizm/SellingProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/confirmPassword',
    name: 'ConfirmPassword',
    component: ConfirmPassword
  },
  {
    path: '/detailproduct',
    name: 'detailproduct',
    component: DetailProduct
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/chatempety',
    name: 'Chatempety',
    component: Chatempety
  },
  {
    path: '/sellingproduct',
    name: 'SellingProduct',
    component: SellingProduct
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
