<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-3 font-weight-bold">My bag</h2>
      <div class="row" v-if="!empty">
        <div class="col-md-8">
          <div class="col-md-12 p-3 shadow-sm rounded">
            <div class="d-flex justify-content-between">
              <b-form-checkbox size="lg" class="font-weight-bold text-left ml-2">
                <span class="ml-4" style="fontSize:16px">
                  Select all items
                  <span class="text-muted">(2 items selected)</span>
                </span>
              </b-form-checkbox>
              <span class="btn text-danger">Delete</span>
            </div>
          </div>
          <div class="scroll-cart">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div class="col-md-4">
          <b-card class="border-0 p-2 shadow-sm">
            <h5 class="font-weight-bold mb-3">Shopping Summary</h5>
            <div class="d-flex justify-content-between">
              <b-card-text class>Total Price</b-card-text>
              <b-card-text class="font-weight-bold">$ 20.0</b-card-text>
            </div>
            <div class="text-center mt-4">
              <b-button pill block variant="success">Buy</b-button>
            </div>
          </b-card>
        </div>
      </div>
      <div class="text-center mt-3" v-if="empty">
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
import CartItem from '@/components/molecules/CartItem'

export default {
  components: {
    CartItem
  },
  data() {
    return {
      empty: true
    }
  }
}
</script>

<style  scoped>
.scroll-cart {
  max-height: 400px;
  overflow-y: scroll;
}
</style>
