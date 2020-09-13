<template>
  <g-dashboard title="My Product" noBorder>
    <b-nav tabs>
      <b-nav-item>All Items</b-nav-item>
      <b-nav-item>Sold Items</b-nav-item>
      <b-nav-item>Archived</b-nav-item>
    </b-nav>
    <div class="row">
      <div class="col-md-12 mt-4">
        <g-notfound
          v-if="getMyProducts.length < 1"
          imageMessage="noproduct.svg"
          message="You don't have a product yet"
          hideButton
          :width="200"
        />
        <TableMyProduct v-if="getMyProducts.length >= 1" />
      </div>
    </div>
  </g-dashboard>
</template>

<script>
import TableMyProduct from '@/components/molecules/TableMyProduct'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fileImage: ''
    }
  },
  methods: {
    ...mapActions('product', ['myProducts'])
  },
  components: { TableMyProduct },
  mounted() {
    this.myProducts()
  },
  computed: {
    ...mapGetters('user', ['getDetailUser']),
    ...mapGetters('product', ['getMyProducts'])
  }
}
</script>

<style>
@media screen and (max-width: 992px) {
  .responsive-profile {
    flex-direction: column-reverse;
  }
  .col-md-12 .responsive-profile-border {
    border-left: 0 !important;
  }
}
@media screen and (max-width: 767px) {
  .row .responsive-sidebar {
    border-right: 0 !important;
    border-bottom: 1px solid #ddd;
  }
}
</style>
