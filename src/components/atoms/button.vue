<template>
<<<<<<< HEAD
  <button :disabled="isLoading" @click="$emit('cus-click')" class="btn" :class="cusClass">
=======
  <button :disabled="isLoading" class="btn" :class="cusClass">
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
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
<<<<<<< HEAD
  background: #32c33b;
  border-radius: 20px;
  color: white;

  width: 100%;
  height: 40px;
=======
  background: #32C33B;
  border-radius: 25px;
  color: white;
  width: 400px;
  height: 40px;
  cursor: pointer;
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
}
</style>
