<template>
  <g-dashboard title="Shipping Address" description="Manage your shipping address">
    <ShippingAddress class="mt-4" />
  </g-dashboard>
</template>

<script>
import ShippingAddress from '@/components/molecules/ShippingAddress'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      fileImage: ''
    }
  },
  components: {
    ShippingAddress
  },
  computed: mapGetters('user', ['getDetailUser'])
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
