<template>
  <div>
    <div id="address">
      <div id="address-card">
        <span v-if="getActiveAddress.address">Andreas {{getActiveAddress.receiptName}}</span>
        <p
          v-if="getActiveAddress.address"
        >{{getActiveAddress.home}}, {{getActiveAddress.address}}, {{getActiveAddress.city}}, [Phone: {{getActiveAddress.receiptPhone}}], {{getActiveAddress.postalCode}}</p>
        <p
          v-if="!getActiveAddress.address"
        >You don't have an address yet, please select a primary address or a new address</p>
        <div class="address-button">
          <button v-b-modal.modal-select data-target="#addressModal">Choose another address</button>
        </div>
      </div>
    </div>

    <b-modal
      hide-header
      hide-footer
      id="modal-select"
      size="lg"
      title="First Modal"
      ok-only
      body-class="p-0"
    >
      <div class="container-fluid mdl-address">
        <div class="row mdl-address-header">
          <div class="col-md-12">
            <button
              type="button"
              @click="$bvModal.hide('modal-select')"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="row mdl-address-body">
          <div class="col-md-11 mdl-address-main">
            <div class="mdl-address-title">
              <h4>Choose another address</h4>
            </div>
            <button class="dash-box" v-b-modal.modal-add>
              <h4>Add new address</h4>
            </button>
          </div>
          <div class="col-md-11 mdl-address-list">
            <div v-for="address in getallAddress" :key="address.id">
              <button
                class="address-box"
                :disabled="getActiveAddress.id === address.id"
                @click="changeActive(address.id)"
              >
                <span>Andreas {{address.receiptName}}</span>
                <p>{{address.home}}, {{address.address}}, {{address.city}}, [Phone: {{address.receiptPhone}}], {{address.postalCode}}</p>
                <h4
                  class="change"
                  data-toggle="modal"
                  data-target="#addressModal"
                >{{getActiveAddress.id === address.id ? 'Active' : 'Change Address'}}</h4>
              </button>
              <g-button
                @cus-click="deleteAction(address.id)"
                :isLoading="getLoading"
                removeDefault
                v-if="getActiveAddress.id !== address.id"
                class="btn btn-danger btn-block text-center"
              >Delete</g-button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal
      hide-header
      size="lg"
      hide-footer
      body-class="p-0"
      id="modal-add"
      title="Second Modal"
      ok-only
    >
      <div class="container-fluid new-address">
        <div class="row new-address-header">
          <div class="col-md-12">
            <button
              type="button"
              @click="$bvModal.hide('modal-add')"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="new-address-title">
          <h4 class="text-center mt-2 mb-4">Add new address</h4>
        </div>
        <form @submit.prevent="actionPostAddress">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Save address as (ex : home address, office address)</label>
                  <input type="text" v-model="home" class="form-control" placeholder="Rumah" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label>Recipient's name</label>
                  <input type="text" v-model="receiptName" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" v-model="address" class="form-control" />
                </div>
                <div class="form-group">
                  <label>City or Subdistrict</label>
                  <input type="text" v-model="city" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label>Recipient's telephone number</label>
                  <input type="tel" v-model="receiptPhone" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Postal code</label>
                  <input type="text" class="form-control" v-model="postalCode" />
                </div>
              </div>
            </div>
          </div>
          <div class="submit">
            <button
              type="button"
              @click="$bvModal.hide('modal-add')"
              class="cancel-btn"
              data-dismiss="modal"
            >Cancel</button>
            <g-button type="submit" :isLoading="getLoading" class="save-btn">Save</g-button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      home: '',
      receiptName: '',
      address: '',
      city: '',
      receiptPhone: '',
      postalCode: ''
    }
  },
  methods: {
    ...mapActions('address', [
      'activeAddress',
      'allAddress',
      'setActiveAddress',
      'postAddress',
      'deleteAddress'
    ]),
    changeActive(id) {
      this.setActiveAddress(id)
        .then((response) => {
          this.toastSuccess('Address Change')
        })
        .catch((err) => {
          this.toastError(
            err.data.error.sqlMessage
              ? err.data.error.sqlMessage
              : err.data.error.join(', ')
          )
        })
    },
    deleteAction(id) {
      this.deleteAddress(id)
        .then((response) => {
          this.toastSuccess('Address Deleted')
        })
        .catch((err) => {
          this.toastError(
            err.data.error.sqlMessage
              ? err.data.error.sqlMessage
              : err.data.error.join(', ')
          )
        })
    },
    actionPostAddress() {
      const data = {
        home: this.home,
        receiptName: this.receiptName,
        address: this.address,
        city: this.city,
        receiptPhone: this.receiptPhone,
        postalCode: this.postalCode
      }
      this.postAddress(data)
        .then((response) => {
          this.toastSuccess('Address successfully added')
          this.home = ''
          this.receiptName = ''
          this.address = ''
          this.city = ''
          this.receiptPhone = ''
          this.postalCode = ''
          this.$bvModal.hide('modal-add')
        })
        .catch((err) => {
          this.toastError(
            err.data.error.sqlMessage
              ? err.data.error.sqlMessage
              : err.data.error.join(', ')
          )
        })
    }
  },
  mounted() {
    this.activeAddress()
    this.allAddress()
  },
  computed: {
    ...mapGetters(['getLoading']),
    ...mapGetters('cart', ['getAllCarts', 'cartTotalPrice', 'countTotalCart']),
    ...mapGetters('address', ['getActiveAddress', 'getallAddress'])
  }
}
</script>

<style scoped>
#navbar {
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
  border-bottom: 1px solid;
}

/* Body */
/* Main */

/* Checkout Title */
#title {
  height: 100px;
  padding-top: 35px;
  text-align: left;
}
#title span {
  font-size: 30px;
  font-weight: bold;
}
.shadow-footer {
  box-shadow: 0px -8px 10px rgba(217, 217, 217, 0.25);
  border-radius: 0px 0px 8px 8px;
}

/* Address */
#address h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
}
#address-card {
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
  border-radius: 4px;
  padding: 25px 30px;
  font-size: 16px;
  text-align: left;
}
#address-card span {
  font-weight: 700;
}
#address-card p {
  margin-top: 5px;
}
.address-button {
  height: 50px;
  display: flex;
  align-items: center;
}
.address-button button {
  width: 210px;
  height: 35px;
  border: 1px solid #9b9b9b;
  border-radius: 25px;
  background: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #9b9b9b;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Product Cart */
#cart {
  margin-top: 20px;
  margin-bottom: 50px;
  height: 400px;
  overflow: auto;
  padding: 10px;
}
.cart-card {
  background: #ffffff;
  margin-top: 20px;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
  border-radius: 4px;
  padding: 20px 45px 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product {
  display: flex;
  align-items: center;
}
.product img {
  width: 70px;
  height: 70px;
  background: #aeaeae;
  border-radius: 8px;
}
.detail {
  margin-left: 15px;
  font-size: 16px;
  text-align: left;
}
.detail h5 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
}
.detail p {
  font-size: 12px;
  font-weight: bold;
  color: #9b9b9b;
}
.price {
  font-weight: bold;
  font-size: 16px;
  color: #222222;
}

/* Aside */

.aside-card {
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
  border-radius: 4px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.aside-card h5 {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  /* margin-bottom: 5px; */
}

.list {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #9b9b9b;
  padding-bottom: 15px;
}
.list-card {
  height: 30px;
  margin-top: 0;
}
.list-card h5 {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  color: #9b9b9b;
}
.list-card span {
  color: #222222;
  font-weight: bolder;
  font-size: 18px;
}

.total h4 {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}
.total span {
  font-weight: bold;
  font-size: 18px;
  color: #32c33b;
}

.pay {
  margin-top: 10px;
  height: 35px;
  border-radius: 25px;
  border: none;
  background: #32c33b;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal Address */
.mdl-address {
  height: 575px;
  padding: 15px;
}
.mdl-address-header span {
  font-size: 30px;
}

.mdl-address-body {
  display: flex;
  justify-content: center;
}
.mdl-address-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mdl-address-title h4 {
  font-weight: 600;
  font-size: 28px;
}

.dash-box {
  width: 100%;
  height: 80px;
  border: 1px dashed #9b9b9b;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dash-box h4 {
  font-weight: 600;
  font-size: 18px;
  color: #9b9b9b;
}

.mdl-address-list {
  height: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.address-box {
  width: 700px;
  background: #ffffff;
  border: 1px solid #32c33b;
  border-radius: 4px;
  margin: 15px 0;
  text-align: left;
  padding: 10px 20px 12px;
}
.address-box span {
  font-weight: 600;
  font-size: 16px;
}
.address-box p {
  margin-top: 5px;
  font-size: 14px;
}

.change {
  font-weight: bold;
  font-size: 16px;
  color: #32c33b;
}

/* Modal New Address */
.new-address {
  padding: 20px 15px;
}
.new-address-header span {
  font-size: 30px;
}

.new-address-body {
  display: flex;
  justify-content: center;
}
.new-address-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.new-address-title h4 {
  font-weight: 600;
  font-size: 28px;
}

.top-form {
  width: 720px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  color: #9b9b9b;
  text-align: left;
}
.top-form input {
  border: 1px solid #9b9b9b;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
}
.new-address-form {
  display: flex;
  width: 720px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  color: #9b9b9b;
}
.new-address-form .form-group {
  margin: 0;
  text-align: left;
}
.new-address-form input {
  border: 1px solid #9b9b9b;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
}
.left-form {
  width: 340px;
}
.right-form {
  width: 340px;
}

.check {
  width: 720px;
  margin-top: 30px;
  text-align: left;
}
.check span {
  font-weight: 500;
  font-size: 14px;
  color: #9b9b9b;
  margin-left: 10px;
}

.submit {
  display: flex;
  justify-content: flex-end;
  margin-top: 45px;
}
.submit button {
  width: 160px;
  height: 36px;
  border-radius: 25px;
}
.cancel-btn {
  border: 1px solid #9b9b9b;
  background: #ffffff;
  margin-right: 20px;
  color: #9b9b9b;
}
.save-btn {
  border: none;
  background: #32c33b;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
}

/* Payment Modal */
.pay-header {
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(53, 50, 50, 0.25);
  border-radius: 8px 8px 0px 0px;
  display: flex;
  align-items: center;
}
.pay-header span {
  font-size: 30px;
  margin-left: 20px;
}
.pay-header h4 {
  margin-top: 5px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 22px;
}

.pay-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pay-method {
  width: 450px;
  height: 220px;
}
.pay-method h4 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 25px;
  text-align: left;
}
.payment {
  height: 150px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.pay-card {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
}
.card-profile {
  display: flex;
  align-items: center;
}
.card-profile span {
  margin-left: 70px;
  font-weight: 600;
  font-size: 16px;
}
#paycard-img {
  height: 41px;
  width: 82px;
  display: flex;
  align-items: center;
}
.pay-card input {
  border: 2px solid #9b9b9b;
  box-sizing: border-box;
  border-radius: 4px;
  width: 20px;
  height: 20px;
}

.border {
  height: 5px;
  width: 498px;
  background: #dddddd;
}

.shop-sum h4 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  text-align: left;
}

.total-price {
  height: 70px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.price-card {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-weight: 600;
}
.price-card h4 {
  font-size: 16px;
  color: #9b9b9b;
  margin: 0;
}
.price-card span {
  font-size: 18px;
}

.pay-footer {
  background: #ffffff;
  box-shadow: 0px -8px 10px rgba(217, 217, 217, 0.25);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}
.total-sum h4 {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
}
.total-sum p {
  font-weight: 600;
  font-size: 18px;
  color: #32c33b;
  text-align: left;
}
.buy-btn {
  width: 160px;
  height: 36px;
  border: none;
  background: #32c33b;
  border-radius: 25px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
}
</style>
