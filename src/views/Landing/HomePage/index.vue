<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="mt-4 col-12">
          <BannerCarousel />
        </div>
        <div class="col-12 mt-3">
          <h2 class="text-left text-black font-weight-bold">Category</h2>
          <p class="text-muted text-left">what are you currently looking for</p>
        </div>
        <div class="col-12 mt-1">
          <CategoryCarousel />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-5">
          <h2 class="text-left text-black font-weight-bold">New</h2>
          <p class="text-muted text-left">you've never seen it before</p>
        </div>
      </div>
      <div class="row">
        <CardProduct v-for="product in getNewProducts" :key="product.id" :product="product" />
      </div>
      <div class="row">
        <div class="col-md-12 mt-5">
          <h2 class="text-left text-black font-weight-bold">Popular</h2>
          <p class="text-muted text-left">Find clothes that are trending recently</p>
        </div>
      </div>
      <div class="row">
        <CardProduct
          v-for="popularProduct in getPopularProducts"
          :key="popularProduct.id"
          :product="popularProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BannerCarousel from '@/components/molecules/BannerCarousel'
import CategoryCarousel from '@/components/molecules/CategoryCarousel'
import CardProduct from '@/components/molecules/CardProduct'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { BannerCarousel, CategoryCarousel, CardProduct },
  methods: {
    ...mapActions('product', ['newProducts', 'popularProducts'])
  },
  created() {
    this.newProducts()
    this.popularProducts()
  },
  computed: mapGetters('product', ['getNewProducts', 'getPopularProducts'])
}
</script>

<style scoped>
.banner {
  width: 456px;
  height: 180px;
  object-fit: cover;
}
.image {
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}
.text {
  font-size: 45px;
}
.overflow {
  width: 200px;
  height: 100px;
  overflow-y: hidden;
  overflow-x: scroll;
}
</style>
