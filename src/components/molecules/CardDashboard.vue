<template>
  <div class="card border-0">
    <div class="card-body">
      <div class="header-info pb-3" :class="[noBorder ? '' : 'border-bottom']">
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
    description: String,
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
