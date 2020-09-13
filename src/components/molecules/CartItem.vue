<template>
  <div class="col-12 p-4 mt-3 shadow-sm">
    <div class="row">
      <div class="col-1 mt-4">
        <button @click="REMOVE_PRODUCT_FROM_CART(cart.product.id)" class="btn btn-danger btn-sm">
          <b-icon icon="trash-fill" />
        </button>
      </div>
      <div class="col-2">
        <b-img left :src="cart.product.image" class="img-fluid" alt="Left image"></b-img>
      </div>
      <div class="col-4">
        <p class="text-left mb-1 font-weight-bold">
          {{cart.product.name}} | {{cart.detail.size}} |
          <span
            class="color-cart border"
            :style="{background:cart.detail.color}"
          ></span>
        </p>
        <p class="text-left mb-0 text-muted">{{cart.product.storeName}}</p>
      </div>
      <div class="col-2 mt-sm-5 mt-lg-3 mt-md-5 text-center">
        <div class="d-flex">
          <div>
            <b-button
              @click="MIN_QTY_CART({product: cart.product, stock:cart.detail.stock})"
              pill
              class="btn-secondary shadow-sm"
            >-</b-button>
          </div>
          <p class="col-lg-4 mt-1">{{cart.qty}}</p>
          <div>
            <b-button
              @click="PLUS_QTY_CART({product: cart.product, stock:cart.detail.stock})"
              pill
              class="bg-white border-0 text-dark shadow-sm"
            >+</b-button>
          </div>
        </div>
      </div>
      <div class="col-2 mt-sm-4 mt-lg-0 mt-md-4">
        <small class="mt-4 mb-0 text-right">{{cart.product.price | currency}}</small>
        <br />
        <small class="mt-4 mb-0 text-right">{{cart.product.price * cart.qty | currency}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['cart'],
  methods: {
    ...mapMutations('cart', [
      'PLUS_QTY_CART',
      'MIN_QTY_CART',
      'REMOVE_PRODUCT_FROM_CART'
    ])
  }
}
</script>

<style scoped>
.color-cart {
  display: inline-block;
  width: 15px;
  height: 15px;
}
</style>
