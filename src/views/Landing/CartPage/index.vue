<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-3 font-weight-bold">My bag</h2>
      <div class="row" v-if="countTotalCart >= 1">
        <div class="col-md-8">
          <div class="col-md-12 p-3 shadow-sm rounded">
            <div class="d-flex justify-content-end">
              <span @click="CLEAR_CART" class="btn btn-outline-danger">Clear Cart</span>
            </div>
          </div>
          <div class="scroll-cart">
            <div class="shadow-sm responsive-cart">
              <CartItem v-for="(cart, id) in getAllCarts" :key="id" :cart="cart" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <b-card class="border-0 p-2 shadow-sm">
            <h5 class="font-weight-bold mb-3">Shopping Summary</h5>
            <div class="d-flex justify-content-between">
              <b-card-text class>Total Price</b-card-text>
              <b-card-text class="font-weight-bold">{{cartTotalPrice | currency}}</b-card-text>
            </div>
            <div class="text-center mt-4">
              <router-link
                :to="{name: 'Checkout'}"
                class="btn btn-success rounded-pill btn-block"
              >Buy</router-link>
            </div>
          </b-card>
        </div>
      </div>
      <div class="text-center mt-3" v-if="countTotalCart < 1">
        <img
          :src="require(`@/assets/images/cartempty.svg`)"
          class="img-fluid"
          width="300px"
          alt
          srcset
        />
        <h3 class="font-weight-bold text-dark mt-5">Your Cart Is Empty</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CartItem from '@/components/molecules/CartItem'

export default {
  components: {
    CartItem
  },
  data() {
    return {
      empty: false
    }
  },
  methods: {
    ...mapMutations('cart', ['CLEAR_CART'])
  },
  computed: {
    ...mapGetters('cart', ['countTotalCart', 'getAllCarts', 'cartTotalPrice'])
  }
}
</script>

<style  scoped>
.scroll-cart {
  max-height: 400px;
  overflow-y: auto;
}
.responsive-cart {
  width: 800px;
}
</style>
