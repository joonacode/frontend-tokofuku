<template>
  <div class="border-top py-3" :class="[!isDashboard ? 'mt-5' : '']">
    <div class="container">
      <div class="text-center">
        <p class="mb-0 text-muted">Copyright &copy; TokoFuku</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDashboard: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
