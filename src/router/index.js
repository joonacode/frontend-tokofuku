import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/LoginPage/Login.vue'
import ResetPassword from '../views/Auth/ResetPassword/ResetPassword.vue'
import ConfirmPassword from '../views/Auth/ResetPassword/ConfirmPassword.vue'
import DetailProduct from '../components/organisms/detailproduct.vue'

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
