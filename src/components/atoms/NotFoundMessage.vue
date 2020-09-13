<template>
  <div class="text-center px-3" style="margin:70px 0 100px 0">
    <b-img :src="require(`@/assets/images/${imageMessage}`)" :width="width" fluid alt="Fluid image"></b-img>
    <h5 class="mt-4">{{message}}</h5>
    <router-link
      v-if="!hideButton"
      class="btn btn-success shadow mt-3"
      :to="{name: 'AllProduct'}"
    >Back To Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Oppss... The data you are looking for was not found'
    },
    imageMessage: {
      type: String,
      default: 'notfound.svg'
    },
    hideButton: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 400
    }
  }
}
</script>

<style scoped>
</style>
