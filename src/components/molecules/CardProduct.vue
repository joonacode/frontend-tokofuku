<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
    <div class="card card-product border-0">
      <img :src="getFirstImage" class="card-img-top" alt="..." />
      <div class="card-body">
        <span @click="tes" class="text-dark text-decoration-none" style="cursor:pointer">
          <h5
            class="card-title mb-2"
          >{{product.name.length > 35 ? product.name.substr(0,35)+'...' : product.name}}</h5>
        </span>
        <span class="text-danger my-1 font-weight-bold">{{product.price | currency}}</span>
        <span class="text-muted d-block">{{product.storeName}}</span>
        <b-form-rating
          no-border
          readonly
          size="sm"
          class="p-0"
          show-value
          variant="warning"
          inline
          value="4"
        ></b-form-rating>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['product'],
  methods: {
    ...mapActions('product', ['randomProducts', 'detailProduct']),
    tes() {
      this.detailProduct(this.product.id)
      this.$router.push({
        name: 'DetailProduct',
        params: { id: this.product.id }
      })
      this.randomProducts()
    }
  },
  computed: {
    getFirstImage() {
      const image = this.product.image
      const hasil = image.split(', ')
      return hasil[0]
    }
  }
}
</script>

<style scoped>
.card-product {
  border-radius: 8px !important;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 8px;
}
.card-product img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media screen and (max-width: 575px) {
  .card-product img {
    height: 100%;
  }
}

.card-product .card-title {
  font-size: 18px;
  line-height: 24px;
}
</style>
