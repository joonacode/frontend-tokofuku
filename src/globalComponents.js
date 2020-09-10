import Vue from 'vue'

// Contoh membuat komponen jadi global tanpa import lagi
// atoms
Vue.component('g-button',
  () => import('./components/atoms/button.vue')
)
<<<<<<< HEAD
=======
Vue.component('g-brand',
  () => import('./components/atoms/brand.vue')
)
>>>>>>> 78eb59314b93da08758aa31ebfcca7de9476758d
