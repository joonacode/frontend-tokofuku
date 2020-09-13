<template>
  <div class="col-lg-3 col-md-4 py-5 responsive-sidebar border-right">
    <div class="d-flex" style="marginBottom:70px">
      <b-avatar v-if="getDetailUser.image" size="4rem" :src="getDetailUser.image"></b-avatar>
      <b-avatar v-else size="4rem"></b-avatar>
      <div class="d-flex ml-3 flex-column">
        <h5 class="text-left mt-1">{{getDetailUser.name}}</h5>
        <router-link :to="{name: 'Profile'}" class="text-muted text-decoration-none mt-n2 profile">
          <b-icon icon="pencil" variant="secondary"></b-icon>
          <span class="ml-1">Ubah profile</span>
        </router-link>
      </div>
    </div>
    <!-- Menu Admin -->
    <div v-if="getDetailUser.roleId === 1">
      <div class="menu-item">
        <router-link
          :to="{name: 'Profile'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/myprofile.png`)" alt />
          <span class="ml-3">My Account</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link
          :to="{name: 'Profile'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/address.png`)" alt />
          <span class="ml-3">Shipping Adrress</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link
          :to="{name: 'Profile'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/myorder.png`)" alt />
          <span class="ml-3">My Order</span>
        </router-link>
      </div>
    </div>
    <!-- Menu Seller -->
    <div v-if="getDetailUser.roleId === 2">
      <div class="menu-item">
        <a
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="true"
          aria-controls="collapseExample"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/home.png`)" alt />
          <span class="ml-3">Store</span>
          <b-icon icon="chevron-down" variant="dark" class="ml-5 icons float-right"></b-icon>
        </a>
        <div class="collapse text-left mt-4 ml-4" id="collapseExample">
          <router-link
            :to="{name: 'ProfileStore'}"
            class="text-dark linkChild d-block mb-3 text-muted text-decoration-none"
          >Store profile</router-link>
        </div>
      </div>
      <div class="menu-item">
        <a
          data-toggle="collapse"
          href="#collapseProduct"
          aria-expanded="true"
          aria-controls="collapseProduct"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/product.png`)" alt />
          <span class="ml-3">Product</span>
          <b-icon icon="chevron-down" variant="dark" class="ml-5 icons float-right"></b-icon>
        </a>
        <div class="collapse text-left mt-4 ml-4" id="collapseProduct">
          <router-link
            :to="{name: 'MyProducts'}"
            class="text-dark linkChild d-block mb-3 text-muted text-decoration-none"
          >My Products</router-link>
          <router-link
            to
            class="text-dark linkChild d-block mb-3 text-muted text-decoration-none"
          >Selling Products</router-link>
        </div>
      </div>
      <div class="menu-item">
        <a
          data-toggle="collapse"
          href="#collapseOrder"
          aria-expanded="true"
          aria-controls="collapseOrder"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/cart2.png`)" alt />
          <span class="ml-3">Order</span>
          <b-icon icon="chevron-down" variant="dark" class="ml-5 icons float-right"></b-icon>
        </a>
        <div class="collapse text-left mt-4 ml-4" id="collapseOrder">
          <router-link
            to
            class="text-dark linkChild d-block mb-3 text-muted text-decoration-none"
          >My Order</router-link>
          <router-link
            to
            class="text-dark linkChild d-block mb-3 text-muted text-decoration-none"
          >Order Cancle</router-link>
        </div>
      </div>
    </div>
    <!-- Menu Customer -->
    <div v-if="getDetailUser.roleId === 3">
      <div class="menu-item">
        <router-link
          :to="{name: 'Profile'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/myprofile.png`)" alt />
          <span class="ml-3">My Account</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link
          :to="{name: 'ShippingAddress'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/address.png`)" alt />
          <span class="ml-3">Shipping Adrress</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link
          :to="{name: 'Profile'}"
          aria-expanded="true"
          class="linkCollapse text-dark text-decoration-none"
        >
          <img :src="require(`@/assets/images/myorder.png`)" alt />
          <span class="ml-3">My Order</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('user', ['getDetailUser'])
}
</script>

<style scoped>
.menu-item {
  margin-bottom: 30px;
  padding-right: 20px;
}
</style>
