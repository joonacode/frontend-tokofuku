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
.btn {
  background: #32C33B;
  border-radius: 25px;
  color: white;
  width: 400px;
  height: 40px;
  cursor: pointer;
}
</style>
