<template>
  <div>
    <DetailProduct v-if="getDetailProduct.name" :product="getDetailProduct">
      <template #randomProduct>
        <div class="row">
          <CardProduct v-for="product in getRandomProducts" :key="product.id" :product="product" />
        </div>
      </template>
    </DetailProduct>
    <div v-if="!getLoading">
      <g-notfound v-if="!getDetailProduct.name" />
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/molecules/CardProduct'
import DetailProduct from '@/components/organisms/DetailProduct'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { DetailProduct, CardProduct },
  methods: mapActions('product', ['randomProducts', 'detailProduct']),
  mounted() {
    const id = this.$route.params.id
    this.randomProducts()
    this.detailProduct(id)
  },
  computed: {
    ...mapGetters('product', ['getRandomProducts', 'getDetailProduct']),
    ...mapGetters(['getLoading'])
  }
}
</script>
