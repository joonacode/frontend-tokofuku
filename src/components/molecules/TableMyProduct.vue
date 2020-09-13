<template>
  <div>
    <div class="row">
      <div class="col-md-4 mr-auto">
        <b-form-group class="w-25 w-100">
          <b-input-group size="sm">
            <b-form-input
              class="rounded-pill"
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Search"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </div>
    </div>
    <div class="border">
      <b-table
        show-empty
        head-variant="light"
        borderless
        :current-page="currentPage"
        :per-page="perPage"
        :fields="fields"
        :items="getMyProducts"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filter"
        @filtered="onFiltered"
        sort-icon-left
        responsive
        hover
      >
        <template
          v-slot:cell(id)="data"
        >{{currentPage === 1 ? (data.index + 1) : (perPage * (currentPage - 1) + 1) + data.index}}</template>
        <template v-slot:cell(amount)="data">{{data.item.price | currency}}</template>

        <template v-slot:cell(option)="row">
          <g-button
            removeDefault
            v-if="row.item.status === 1"
            @cus-click="cancleOrder(row.item.id)"
            type="button"
            cusClass="btn btn-danger btn-sm ml-1 mt-1"
            size="sm"
          >Cancle</g-button>
        </template>
      </b-table>
    </div>
    <b-pagination
      class="mt-3"
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>

<script>
import mixins from '@/components/mixins/swal'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'TableHistory',
  mixins: [mixins],
  data() {
    return {
      sortBy: 'id',
      sortDesc: true,
      fields: [
        { key: 'name', label: 'Product Name', sortable: true },
        { key: 'price', sortable: true },
        { key: 'stock', sortable: true }
      ],
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: [],
      totalRows: 0
    }
  },
  methods: {
    ...mapActions('product', ['myProducts', 'updateStatusOrder']),
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    filterDate(param) {
      const dateFormat = {
        day: 'numeric',
        month: 'long',
        weekday: 'long'
      }
      return param.toLocaleDateString('id-ID', dateFormat)
    },
    cancleOrder(id) {
      this.confirmSwal(
        'Order',
        'Are you sure you want to cancel this order',
        'question',
        () => {
          this.updateStatusOrder({ status: '4', id })
            .then((response) => {
              this.toastSuccess('Order canceled')
            })
            .catch((err) => {
              console.log(err)
              this.toastError(
                err.data.error.sqlMessage
                  ? err.data.error.sqlMessage
                  : err.data.error.join(', ')
              )
            })
        }
      )
    }
  },
  mounted() {
    this.myProducts()
    this.totalRows = this.getMyProducts.length
  },
  computed: {
    ...mapGetters('product', ['getMyProducts']),
    ...mapState('auth', ['roleId', 'idUser'])
  }
}
</script>

<style scoped>
.color-radio {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 100%;
}
</style>
