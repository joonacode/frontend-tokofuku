<template>
  <div>
    <DetailProduct :product="getDetailProduct">
      <template #randomProduct>
        <div class="row">
          <CardProduct v-for="product in getRandomProducts" :key="product.id" :product="product" />
        </div>
      </template>
    </DetailProduct>
  </div>
</template>

<script>
import CardProduct from '@/components/molecules/CardProduct'
import DetailProduct from '@/components/organisms/DetailProduct'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { DetailProduct, CardProduct },
  methods: mapActions('product', ['randomProducts', 'detailProduct']),
  created() {
    const id = this.$route.params.id
    this.randomProducts()
    this.detailProduct(id)
  },
  computed: mapGetters('product', ['getRandomProducts', 'getDetailProduct'])
}
</script>
