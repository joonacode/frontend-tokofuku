<template>
  <div>
    <MainNavbar isDashboard />
    <div style="background:#fff">
      <div class="container">
        <div class="row">
          <MainSidebar />
          <div class="col-lg-9 col-md-8 py-5">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <MainFooter isDashboard />
  </div>
</template>

<script>
import MainNavbar from '@/components/layout/MainNavbar'
import MainFooter from '@/components/layout/MainFooter'
import MainSidebar from '@/components/layout/MainSidebar'
export default {
  components: {
    MainNavbar,
    MainFooter,
    MainSidebar
  }
}
</script>

<style scoped>
</style>
