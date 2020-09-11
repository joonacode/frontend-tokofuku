<template>
  <button
    :disabled="isLoading"
    @click="$emit('cus-click')"
    class="btn"
    :class="[cusClass, !removeDefault ? 'btn-default' : '']"
  >
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
    },
    removeDefault: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.btn-default {
  background: #32c33b;
  border-radius: 20px;
  color: white;

  width: 100%;
  height: 40px;
}
</style>
