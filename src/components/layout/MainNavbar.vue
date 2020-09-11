<template>
  <nav class="navbar navbar-expand-lg py-3 mb-4 main-navbar shadow-navbar">
    <div class="container">
      <g-brand cusClass="mb-0 navbar-brand" />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img :src="require(`@/assets/images/menu.png`)" width="30" />
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <div class="navbar-nav ml-lg-3 mb-lg-0 mb-4 mr-auto mt-4 mt-lg-0">
          <b-input-group class="navbar-search">
            <b-form-input class="rounded-pill" placeholder="Search..."></b-form-input>
            <b-input-group-append>
              <g-button removeDefault cusClass="btn-filter ml-2 rounded">
                <img :src="require(`@/assets/images/filter.png`)" />
              </g-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="form-inline my-2 my-lg-0">
          <router-link class="mr-4" :to="{name: 'Cart'}">
            <img :src="require(`@/assets/images/cart.png`)" />
          </router-link>
          <div v-if="isLogin">
            <router-link class="mr-4" :to="{name: 'Cart'}">
              <img :src="require(`@/assets/images/bell.png`)" />
            </router-link>
            <router-link class="mr-4" :to="{name: 'Cart'}">
              <img :src="require(`@/assets/images/mail.png`)" />
            </router-link>
            <router-link class="mr-4" :to="{name: 'Cart'}">
              <b-avatar v-if="getDetailUser.image" :src="getDetailUser.image"></b-avatar>
              <b-avatar v-else></b-avatar>
            </router-link>
          </div>
          <div v-if="!isLogin">
            <router-link
              :to="{name: 'Login'}"
              class="btn btn-success rounded-pill text-white px-4 my-2 mr-2 my-sm-0"
            >Login</router-link>
            <router-link
              :to="{name: 'Register'}"
              class="btn btn-outline-secondary px-4 rounded-pill my-2 my-sm-0"
            >Signup</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['getDetailUser'])
  }
}
</script>

<style scoped>
.main-navbar {
  background: #fff;
  color: #555;
}

.main-navbar a {
  text-decoration: none;
}
.navbar-search {
  min-width: 450px;
}

.btn-filter {
  border: 1px solid #8e8e93;
  border-radius: 12px !important;
  transition: 0.5s ease-in-out;
}
.btn-filter:hover {
  border-radius: 0 !important;
}
.shadow-navbar {
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
}

@media screen and (max-width: 600px) {
  .navbar-search {
    min-width: auto;
  }
}
</style>
