import Vue from 'vue'

// Contoh membuat komponen jadi global tanpa import lagi
// atoms
Vue.component('g-button',
  () => import('./components/atoms/button.vue')
)
