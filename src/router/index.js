import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Landing/HomePage'
import Login from '../views/Auth/LoginPage'
import Register from '../views/Auth/RegisterPage'
import Cart from '../views/Landing/CartPage'
import ForgotPassword from '../views/Auth/ForgotPasswordPage'
import ResetPassword from '../views/Auth/ResetPasswordPage'
import DetailProduct from '../components/organisms/detailproduct.vue'

Vue.use(VueRouter)

const routes = [ //
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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/detailproduct',
    name: 'detailproduct',
    component: DetailProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
