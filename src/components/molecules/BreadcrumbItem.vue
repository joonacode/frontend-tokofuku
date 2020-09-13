<template>
  <div>
    <router-link class="text-dark text-decoration-none" :to="{name: 'Home'}">Home</router-link>
    <span class="px-2">></span>
    <span class="text-dark">Category</span>
    <span class="px-2">></span>
    <router-link
      class="text-dark text-decoration-none"
      :to="{name: 'Category', params:{id: idCategory}}"
    >{{category}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['category', 'idCategory']
}
</script>

<style scoped>
</style>
