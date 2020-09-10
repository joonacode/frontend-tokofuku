import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
=======
import Login from '../views/auth/login/Login.vue'
import ResetPassword from '../views/auth/resetPassword/ResetPassword.vue'
import ConfirmPassword from '../views/auth/resetPassword/ConfirmPassword.vue'
import DetailProduct from '../components/organizm/detailproduct.vue'
>>>>>>> 78eb59314b93da08758aa31ebfcca7de9476758d

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
=======
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
>>>>>>> 78eb59314b93da08758aa31ebfcca7de9476758d
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
