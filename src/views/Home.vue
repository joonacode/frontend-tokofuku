<template>
  <div class="home">
    <h1>Home Page</h1>
    <!-- <g-button cusClass="btn-danger mr-2" @click="LinkLogin">Login</g-button> -->
    <g-button cusClass="btn-primary">Global Button</g-button>|
    <router-link class="btn btn-primary" to="/login">Login</router-link>|
    <router-link class="btn btn-primary" to="/detailproduct">detail product</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {}
}
</script>
