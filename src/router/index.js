import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Landing/HomePage'
import Login from '../views/Auth/LoginPage'
import Cart from '../views/Landing/CartPage'
import ForgotPassword from '../views/Auth/ForgotPasswordPage'
import ResetPassword from '../views/Auth/ResetPasswordPage'
import DetailProduct from '../components/organisms/detailproduct.vue'

Vue.use(VueRouter)

const routes = [ //
=======
import Home from '../views/Home.vue'
import Login from '../views/Auth/login/Login.vue'
import Register from '../views/Auth/register/Register.vue'

Vue.use(VueRouter)

const routes = [
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
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
<<<<<<< HEAD
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
=======
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
