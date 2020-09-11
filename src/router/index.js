import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Landing/HomePage'
import Login from '../views/Auth/LoginPage'
import VerifyAccount from '../views/Auth/LoginPage/ActivateAccount.vue'
import Register from '../views/Auth/RegisterPage'
import Cart from '../views/Landing/CartPage'
import ForgotPassword from '../views/Auth/ForgotPasswordPage'
import ResetPassword from '../views/Auth/ResetPasswordPage'
import DetailProduct from '../components/organisms/detailproduct.vue'
import store from '../store'

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
    component: Login,
    meta: {
      requiresVisit: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisit: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      requiresVisit: true
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      requiresVisit: true
    }
  },
  {
    path: '/verify-account',
    name: 'VerifyAccount',
    component: VerifyAccount,
    meta: {
      requiresVisit: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/isLogin']) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisit)) {
    if (store.getters['auth/isLogin']) {
      next({
        name: 'Home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
