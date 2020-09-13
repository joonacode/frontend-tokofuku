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
                <b-button type="button" v-b-modal.modal-1 class="btn btn-filter ml-2 rounded">
                  <img :src="require(`@/assets/images/filter.png`)" />
                </b-button>
                <!-- <g-button type="button" removeDefault cusClass="btn-filter ml-2 rounded">
                  <img :src="require(`@/assets/images/filter.png`)" />
                </g-button>-->
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
            <router-link class="mr-4" to>
              <img :src="require(`@/assets/images/bell.png`)" />
            </router-link>
            <router-link class="mr-3" to>
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
    <b-modal modal-class="p-0" id="modal-1" hide-header hide-footer title="BootstrapVue">
      <div class="container-fluid new-address">
        <div class="row new-address-header border-bottom pb-2 mb-3">
          <div class="col-md-12 d-flex align-items-center">
            <button
              type="button"
              @click="$bvModal.hide('modal-1')"
              class="close font-badag"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="mb-0 ml-2 font-weight-bold">Filter</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 border-bottom pb-2 mb-3">
            <p>Colors</p>
            <div class="button-color">
              <div class="custom-radio-color" v-for="(color, i) in colors" :key="i">
                <input type="checkbox" :value="color" class="radio-color" />
                <span class="color-radio shadow-sm" :style="{background:color}"></span>
              </div>
            </div>
          </div>
          <div class="col-md-12 border-bottom pb-4 mb-3">
            <p>Sizes</p>
            <button class="btn btn-light mr-3 mb-3 shadow-sm">XS</button>
            <button class="btn btn-danger mr-3 mb-3 shadow-sm">S</button>
            <button class="btn btn-danger mr-3 mb-3 shadow-sm">M</button>
            <button class="btn btn-light mr-3 mb-3 shadow-sm">L</button>
            <button class="btn btn-light mr-3 mb-3 shadow-sm">XL</button>
          </div>
          <div class="col-md-12 border-bottom pb-4 mb-3">
            <p>Category</p>
            <button
              v-for="category in getCategories"
              :key="category.id"
              class="btn btn-light mr-3 mb-3 shadow-sm"
            >{{category.name}}</button>
          </div>
          <div class="col-md-12 border-bottom pb-4 mb-3">
            <p>By Price</p>
            <button
              @click="changeByPriceE"
              class="btn mr-3 mb-3 shadow-sm"
              :class="[byPrice === 1 ? 'btn-danger' : 'btn-light']"
            >Most Expensive</button>
            <button
              @click="changeByPriceC"
              class="btn mr-3 mb-3 shadow-sm"
              :class="[byPrice === 2 ? 'btn-danger' : 'btn-light']"
            >Cheapest</button>
          </div>
          <div class="col-md-12 mb-3 d-flex">
            <button
              class="btn btn-light btn-block mr-3 mb-1 rounded-pill shadow-sm"
              @click="$bvModal.hide('modal-1')"
            >Discard</button>
            <button
              @click="filter"
              class="btn btn-danger btn-block rounded-pill mr-3 mb-1 shadow-sm"
            >Apply</button>
          </div>
        </div>
      </div>
    </b-modal>
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      result: '',
      name: '',
      colorData: '',
      colors: ['red', 'green', 'blue'],
      byPrice: 0
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
    },
    filter() {
      const data = {
        order: 'price',
        sort: this.byPrice === 1 ? 'desc' : 'asc'
      }
      this.CHANGE_ORDERING(data)
      if (this.$route.name !== 'FilterProduct') {
        this.$router.push({ name: 'FilterProduct' })
      }
      this.allProducts({
        order: this.product.ordering.order,
        sort: this.product.ordering.sort,
        page: 1
      })
      this.product.currentPage = 1
      this.$bvModal.hide('modal-1')
    },
    changeByPriceE() {
      this.byPrice = 1
    },
    changeByPriceC() {
      this.byPrice = 2
    }
  },
  computed: {
    ...mapState('product', ['search', 'showSearch', 'totalProduct']),
    ...mapState(['product']),
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['getDetailUser']),
    ...mapGetters('category', ['getCategories']),
    ...mapGetters('cart', ['countTotalCart'])
  }
}
</script>

<style scoped>
.font-badag {
  font-size: 30px !important;
}
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
  background-color: transparent !important;
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
.button-color {
  display: flex;
  margin-bottom: 20px;
}
.custom-radio-color {
  display: flex;
  align-items: center;
  position: relative;
}

.radio-color {
  position: absolute;
  left: 15px;
}
.color-radio {
  display: inline-block;
  width: 42px;
  height: 42px;
  margin-right: 10px;
  border-radius: 100%;
}
</style>
