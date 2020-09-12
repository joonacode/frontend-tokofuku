<template>
  <div>
    <MainNavbar />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from '@/components/layout/MainNavbar'
import MainFooter from '@/components/layout/MainFooter'
export default {
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>

<style scoped>
</style>
