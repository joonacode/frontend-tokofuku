<template>
  <button :disabled="isLoading" class="btn" :class="cusClass">
    <span v-if="isLoading">Loading ...</span>
    <span v-if="!isLoading">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    cusClass: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>
