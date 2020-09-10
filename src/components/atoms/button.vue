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
<<<<<<< HEAD
=======
.btn {
  background: #32c33b;
  border-radius: 20px;
  color: white;

  width: 400px;
  height: 40px;
}
>>>>>>> 78eb59314b93da08758aa31ebfcca7de9476758d
</style>
