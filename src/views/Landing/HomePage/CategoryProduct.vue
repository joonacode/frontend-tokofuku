<template>
  <div class="container">
    <div v-if="getAllProducts">
      <div class="row">
        <div class="col-md-12 mt-4 mb-3">
          <h2 class="text-left text-black font-weight-bold">
            {{getDetailCategory.name}}
            <router-link
              class="btn btn-sm btn-success shadow mb-1 ml-2"
              :to="{name: 'AllProduct'}"
            >Back</router-link>
          </h2>
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
    ...mapActions('product', ['allCategoryProducts']),
    ...mapActions('category', ['detailCategory']),
    updatePage(page = null) {
      const id = this.$route.params.id
      this.product.currentPage = page
      this.allCategoryProducts({
        idCategory: id,
        sort: this.product.ordering.sort,
        order: this.product.ordering.order,
        search: this.product.searchInputText,
        page
      })
    }
  },
  created() {
    const id = this.$route.params.id
    this.allCategoryProducts({
      idCategory: id,
      page: this.product.currentPage
    })
    this.detailCategory(id)
  },
  computed: {
    ...mapState(['product']),
    ...mapGetters('product', ['getAllProducts']),
    ...mapGetters('category', ['getDetailCategory'])
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
