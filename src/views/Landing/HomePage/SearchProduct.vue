<template>
  <div class="container">
    <div v-if="getAllProducts">
      <div class="row">
        <div class="col-md-12 mt-4">
          <h2 class="text-left text-black font-weight-bold">
            Search Product
            <router-link
              class="btn btn-sm btn-success shadow ml-2 mb-1"
              :to="{name: 'AllProduct'}"
            >Back</router-link>
          </h2>

          <p
            class="text-muted text-left"
          >Search Result: {{product.searchInputText}}({{product.totalProduct}})</p>
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
    <g-notfound v-if="!getAllProducts" />
  </div>
</template>

<script>
import CardProduct from '@/components/molecules/CardProduct'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  components: { CardProduct },
  methods: {
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
    if (this.product.searchInputText === '') {
      this.$router.push({ name: 'AllProduct' })
    } else {
      this.allProducts({
        search: this.product.searchInputText
      })
      this.allCategories()
    }
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
