import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Landing/HomePage'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Dashboard/ProfilePage'
import ShippingAddress from '../views/Dashboard/ShippingAddressPage'
import ProfileStore from '../views/Dashboard/ProfileStorePage'
import AllProduct from '../views/Landing/HomePage/AllProduct.vue'
import SearchProduct from '../views/Landing/HomePage/SearchProduct.vue'
import CategoryProduct from '../views/Landing/HomePage/CategoryProduct.vue'
import Landing from '../views/Landing/index.vue'
import Checkout from '../views/Landing/CheckoutPage'
import Login from '../views/Auth/LoginPage'
import VerifyAccount from '../views/Auth/LoginPage/ActivateAccount.vue'
import Register from '../views/Auth/RegisterPage'
import Cart from '../views/Landing/CartPage'
import DetailProduct from '../views/Landing/DetailPage'
import ForgotPassword from '../views/Auth/ForgotPasswordPage'
import ResetPassword from '../views/Auth/ResetPasswordPage'
import store from '../store'

Vue.use(VueRouter)

const routes = [ //
  {
    path: '/',
    name: 'Root',
    component: Landing,
    redirect: {
      name: 'Home'
    },
    children: [ //
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'detail-product/:id',
        name: 'DetailProduct',
        component: DetailProduct
      },
      {
        path: 'category/:id',
        name: 'Category',
        component: CategoryProduct
      },
      {
        path: 'home/all',
        name: 'AllProduct',
        component: AllProduct
      },
      {
        path: 'home/search',
        name: 'SearchProduct',
        component: SearchProduct
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    redirect: {
      name: 'Profile'
    },
    meta: {
      requiresLogin: true
    },
    children: [ //
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'profile-store',
        name: 'ProfileStore',
        component: ProfileStore
      },
      {
        path: 'my-products',
        name: 'MyProducts',
        component: ProfileStore
      },
      {
        path: 'shipping-address',
        name: 'ShippingAddress',
        component: ShippingAddress
      }
    ]
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
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
