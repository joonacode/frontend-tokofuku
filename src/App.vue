<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['interceptorsRequest', 'interceptorsResponse']),
    ...mapActions('user', ['detailUser'])
  },
  created() {
    this.interceptorsRequest()
    this.interceptorsResponse()
    // const id = idUser || null
    const token = localStorage.getItem('token')
    if (token) this.detailUser()
  }
}
</script>
