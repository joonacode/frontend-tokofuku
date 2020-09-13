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
    <b-table
      show-empty
      :current-page="currentPage"
      :per-page="perPage"
      :fields="fields"
      :items="allHistoriesAndDetails"
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
      <template v-slot:cell(invoice)="data">#{{data.item.invoice}}</template>
      <template v-slot:cell(payment)="data">{{data.item.paymentMethod}}</template>
      <template v-slot:cell(date)="data">{{filterDate(new Date(data.item.date))}}</template>

      <template v-slot:cell(amount)="data">{{data.item.amount | currency}}</template>
      <template v-slot:cell(status)="data">
        <span
          class="badge"
          :class="filterStatusClass(data.item.status)"
        >{{filterStatus(data.item.status)}}</span>
      </template>
      <template v-slot:cell(option)="row">
        <b-button size="sm" class="ml-1" variant="primary" @click="row.toggleDetails">Details</b-button>
        <g-button
          removeDefault
          v-if="row.item.status === 1"
          @cus-click="cancleOrder(row.item.id)"
          type="button"
          cusClass="btn btn-danger btn-sm ml-1 mt-1"
          size="sm"
        >Cancle</g-button>
      </template>
      <template v-slot:row-details="row">
        <b-card>
          <p>Payment Method: {{row.item.paymentMethod}}</p>
          <p>Detail Orders:</p>
          <table>
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Color</th>
              <th>Size</th>
              <th>Initial Price</th>
              <th>Qty</th>
              <th>Total Price</th>
            </thead>
            <tbody>
              <tr v-for="(detailOrder, i) in row.item.detailOrders" :key="i">
                <td>{{i + 1}}</td>
                <td>{{detailOrder.name}}</td>

                <td>
                  <span class="color-radio shadow-sm" :style="{background:detailOrder.color}"></span>
                </td>
                <td>{{detailOrder.size}}</td>
                <td>{{detailOrder.initialPrice | currency}}</td>
                <td>{{detailOrder.purchaseAmount}}</td>
                <td>{{detailOrder.priceAmount | currency}}</td>
              </tr>
              <tr>
                <td colspan="6">Total Payment</td>
                <td>{{row.item.amount | currency }}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </template>
    </b-table>
    <b-pagination
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
        { key: 'id', sortable: true, label: 'no' },
        { key: 'invoice', sortable: true },
        'payment',
        'date',
        { key: 'amount', sortable: true },
        'status',
        'option'
      ],
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: [],
      totalRows: 0
    }
  },
  methods: {
    ...mapActions('order', ['myOrders', 'updateStatusOrder']),
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
    filterStatus(param) {
      // eslint-disable-next-line no-unused-vars
      let result
      switch (param) {
        case 1:
          result = 'Process'
          break
        case 2:
          result = 'Sent'
          break
        case 3:
          result = 'Completed'
          break
        case 4:
          result = 'Cancle'
          break

        default:
          result = 'Default'
          break
      }
      return result
    },
    filterStatusClass(param) {
      // eslint-disable-next-line no-unused-vars
      let result
      switch (param) {
        case 1:
          result = 'badge-primary'
          break
        case 2:
          result = 'badge-dark'
          break
        case 3:
          result = 'badge-success'
          break
        case 4:
          result = 'badge-danger'
          break

        default:
          result = 'badge-secondary'
          break
      }
      return result
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
    this.myOrders()
    this.totalRows = this.allHistoriesAndDetails.length
  },
  computed: {
    ...mapGetters('order', ['getMyOrder']),
    ...mapState('auth', ['roleId', 'idUser']),
    allHistoriesAndDetails() {
      return this.getMyOrder.map((history) => {
        const arrOrders = history.orders.split(', ')
        const arrpurchaseAmount = history.purchaseAmount.split(', ')
        const arrInitialPrice = history.initialPrice.split(', ')
        const arrPriceAmount = history.priceAmount.split(', ')
        const arrColor = history.color.split(', ')
        const arrSize = history.size.split(', ')
        const newObjOrders = []
        arrOrders.map((order, i) => {
          newObjOrders.push({
            name: order,
            purchaseAmount: arrpurchaseAmount[i],
            initialPrice: arrInitialPrice[i],
            priceAmount: arrPriceAmount[i],
            color: arrColor[i],
            size: arrSize[i]
          })
        })
        return {
          ...history,
          detailOrders: newObjOrders,
          _showDetails: false
        }
      })
    }
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
