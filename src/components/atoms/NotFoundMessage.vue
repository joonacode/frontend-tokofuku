<template>
  <div class="text-center px-3" style="margin:70px 0 100px 0">
    <b-img :src="require(`@/assets/images/notfound.svg`)" width="400" fluid alt="Fluid image"></b-img>
    <h5 class="mt-4">{{message}}</h5>
    <router-link class="btn btn-success shadow mt-3" :to="{name: 'AllProduct'}">Back To Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Oppss... The data you are looking for was not found'
    }
  }
}
</script>

<style scoped>
</style>
