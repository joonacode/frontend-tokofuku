<template>
  <div class="card border-0">
    <div class="card-body">
      <div class="header-info border-bottom pb-3">
        <h5 class="font-weight-bold">{{title}}</h5>
        <p class="text-muted mb-0" v-if="description">{{description}}</p>
      </div>
      <div class="main-card">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
</style>
