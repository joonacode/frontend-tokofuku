<template>
  <nav
    class="navbar navbar-expand-lg py-3 main-navbar shadow-navbar sticky-top"
    :class="[!isDashboard ? 'mb-4' : '']"
  >
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
          <form @submit.prevent="searchAction">
            <b-input-group class="navbar-search">
              <b-form-input v-model="name" class="rounded-pill" placeholder="Search..."></b-form-input>
              <span @click="searchAction">
                <img :src="require(`@/assets/images/search.png`)" class="search-icon" />
              </span>
              <b-input-group-append>
                <g-button type="button" removeDefault cusClass="btn-filter ml-2 rounded">
                  <img :src="require(`@/assets/images/filter.png`)" />
                </g-button>
              </b-input-group-append>
            </b-input-group>
          </form>
        </div>
        <div class="form-inline my-2 my-lg-0">
          <router-link
            v-if="getDetailUser.roleId === 3"
            class="mr-4 position-relative"
            :to="{name: 'Cart'}"
          >
            <img :src="require(`@/assets/images/cart.png`)" />
            <span
              v-if="countTotalCart > 0"
              class="badge badge-success badge-pill count-cart"
            >{{countTotalCart}}</span>
          </router-link>
          <div v-if="isLogin">
            <router-link class="mr-4" :to="{name: 'Cart'}">
              <img :src="require(`@/assets/images/bell.png`)" />
            </router-link>
            <router-link class="mr-3" :to="{name: 'Cart'}">
              <img :src="require(`@/assets/images/mail.png`)" />
            </router-link>
            <div class="dropdown d-inline-block">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b-avatar v-if="getDetailUser.image" :src="getDetailUser.image"></b-avatar>
                <b-avatar v-else></b-avatar>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <router-link :to="{name: 'Dashboard'}" class="dropdown-item">Profile</router-link>
                <a class="dropdown-item" href="#">Setting</a>
                <button class="dropdown-item" @click="logoutMixin">Logout</button>
              </div>
            </div>
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
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      result: '',
      name: ''
    }
  },
  props: {
    isDashboard: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions('product', ['allProducts']),
    ...mapMutations('product', ['UPDATE_SEARCH_INPUT_TEXT', 'CHANGE_ORDERING']),
    searchAction() {
      this.allProducts({
        search: this.name
      })
      this.result = this.name
      this.UPDATE_SEARCH_INPUT_TEXT(this.name)
      this.name = ''
      const currentRoute = this.$route.name

      if (currentRoute !== 'SearchProduct') {
        this.$router.push({ name: 'SearchProduct' })
      }
    }
  },
  computed: {
    ...mapState('product', ['search', 'showSearch', 'totalProduct']),
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['getDetailUser']),
    ...mapGetters('cart', ['countTotalCart'])
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

.count-cart {
  position: absolute;
  left: 15px;
  bottom: 12px;
}

.btn-filter {
  border: 1px solid #ced4da;
  border-radius: 12px !important;
  transition: 0.5s ease-in-out;
}
.btn-filter:hover {
  border-radius: 0 !important;
}
.shadow-navbar {
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
}

.search-icon {
  position: absolute;
  right: 68px;
  top: 9px;
  cursor: pointer;
  z-index: 100;
}

@media screen and (max-width: 600px) {
  .navbar-search {
    min-width: auto;
  }
}
</style>
