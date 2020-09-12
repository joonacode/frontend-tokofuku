<template>
  <div class="container">
    <div class="row">
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
        <h2 class="text-left text-black font-weight-bold">All Product</h2>
        <p class="text-muted text-left">Discover interesting product</p>
      </div>
    </div>
    <div class="row mb-3">
      <CardProduct v-for="product in getAllProducts" :key="product.id" :product="product" />
    </div>
    <b-pagination
      pills
      @change="updatePage"
      v-model="product.currentPage"
      :total-rows="product.totalProduct"
      :per-page="12"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>

<script>
import CategoryCarousel from '@/components/molecules/CategoryCarousel'
import CardProduct from '@/components/molecules/CardProduct'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  components: { CategoryCarousel, CardProduct },
  methods: {
    ...mapMutations('product', ['UPDATE_SEARCH_INPUT_TEXT', 'CHANGE_ORDERING']),

    ...mapActions('product', ['allProducts']),
    ...mapActions('category', ['allCategories']),
    updatePage(page = null) {
      this.product.currentPage = page
      this.allProducts({
        sort: this.product.ordering.sort,
        order: this.product.ordering.order,
        search: this.product.searchInputText,
        page
      })
    }
  },
  created() {
    this.UPDATE_SEARCH_INPUT_TEXT('')
    this.allProducts({
      page: this.product.currentPage
    })
    this.allCategories()
  },
  computed: {
    ...mapState(['product']),
    ...mapGetters('product', ['getAllProducts'])
  }
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
