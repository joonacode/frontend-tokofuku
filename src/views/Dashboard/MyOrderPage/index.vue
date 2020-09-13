<template>
  <g-dashboard title="My Order" noBorder>
    <b-nav tabs>
      <b-nav-item @click.prevent="myOrders()">All Items</b-nav-item>
      <b-nav-item @click.prevent="myOrderStatus(1)">Processed</b-nav-item>
      <b-nav-item @click.prevent="myOrderStatus(2)">Sent</b-nav-item>
      <b-nav-item @click.prevent="myOrderStatus(3)">Completed</b-nav-item>
      <b-nav-item @click.prevent="myOrderStatus(4)">Order Cancle</b-nav-item>
    </b-nav>
    <div class="row">
      <div class="col-md-12 mt-3">
        <g-notfound
          v-if="getMyOrder.length < 1"
          imageMessage="noorder.svg"
          message="There are no orders yet"
          hideButton
          :width="200"
        />
        <TableMyOrder v-if="getMyOrder.length >= 1" />
      </div>
    </div>
  </g-dashboard>
</template>

<script>
import TableMyOrder from '@/components/molecules/TableMyOrder'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fileImage: ''
    }
  },
  methods: {
    ...mapActions('order', ['myOrders', 'myOrderStatus'])
  },
  components: { TableMyOrder },
  mounted() {
    this.myOrders()
  },
  computed: {
    ...mapGetters('user', ['getDetailUser']),
    ...mapGetters('order', ['getMyOrder'])
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
