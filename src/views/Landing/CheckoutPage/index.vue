<template>
  <div class="container">
    <div class="text-center my-5" v-if="countTotalCart < 1">
      <img
        :src="require(`@/assets/images/cartempty.svg`)"
        class="img-fluid"
        width="300px"
        alt
        srcset
      />
      <h3 class="font-weight-bold text-dark mt-5">Your Cart Is Empty</h3>
    </div>
    <div class="row" id="body" v-if="countTotalCart >= 1">
      <div class="col-md-12">
        <div id="title">
          <span>Checkout</span>
        </div>
      </div>
      <div class="col-md-8" id="main">
        <h5>Shipping Address</h5>
        <ShippingAddress />
        <div id="cart">
          <CartItemCheckout v-for="(cart, i) in getAllCarts" :key="i" :cart="cart" />
        </div>
      </div>
      <div class="col-md-4 mt-4" id="aside">
        <div class="aside-card">
          <h5>Shopping summary</h5>
          <div class="list">
            <div class="list-card">
              <h5>
                Order
                <span>{{cartTotalPrice | currency}}</span>
              </h5>
            </div>
            <div class="list-card">
              <h5>
                Delivery
                <span>Rp. 7000</span>
              </h5>
            </div>
          </div>
          <div class="total pt-3">
            <h4>
              Shopping summary
              <span>{{cartTotalPrice + 7000 | currency}}</span>
            </h4>
          </div>
          <b-button class="pay" v-b-modal.my-payment>Select payment</b-button>
        </div>
      </div>
    </div>
    <b-modal hide-header hide-footer body-class="p-0" id="my-payment">
      <div class="container-fluid pay-modal">
        <div class="row pay-header">
          <button
            type="button"
            @click="$bvModal.hide('my-payment')"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4>Payment</h4>
        </div>
        <div class="row pay-body">
          <div class="pay-method">
            <h4>Payment method</h4>
            <div class="payment px-2">
              <div class="pay-card mb-2">
                <div class="card-profile">
                  <div id="paycard-img">
                    <img :src="require(`@/assets/images/cod.png`)" width="50" />
                  </div>
                  <span>Cash on delivery</span>
                </div>
                <input type="radio" v-model="paymentMethod" value="COD" name="payment" />
              </div>
              <div class="pay-card mb-2">
                <div class="card-profile">
                  <div id="paycard-img">
                    <img :src="require(`@/assets/pay1.png`)" />
                  </div>
                  <span>Gopay</span>
                </div>
                <input type="radio" v-model="paymentMethod" value="Gopay" name="payment" />
              </div>
              <div class="pay-card mb-2">
                <div class="card-profile">
                  <div id="paycard-img">
                    <img :src="require(`@/assets/pay2.png`)" />
                  </div>
                  <span>Pos Indonesia</span>
                </div>
                <input type="radio" v-model="paymentMethod" value="Pos Indonesia" name="payment" />
              </div>
              <div class="pay-card mb-2">
                <div class="card-profile">
                  <div id="paycard-img">
                    <img :src="require(`@/assets/pay3.png`)" />
                  </div>
                  <span>Mastercard</span>
                </div>
                <input type="radio" v-model="paymentMethod" value="Mastercard" name="payment" />
              </div>
            </div>
          </div>
          <div class="border"></div>
          <div class="col-md-12 mb-5">
            <div class="shop-sum">
              <h4>Shopping summary</h4>
              <div class="total-price">
                <div class="price-card d-flex justify-content-between">
                  <h4>Order</h4>
                  <span>{{cartTotalPrice | currency}}</span>
                </div>
                <div class="price-card">
                  <h4>Delivery</h4>
                  <span>Rp. 7000</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 shadow-footer">
            <div class="d-flex justify-content-between align-items-center">
              <div class="total-sum pt-4">
                <h4>Shopping summary</h4>
                <p>{{cartTotalPrice + 7000 | currency}}</p>
              </div>
              <g-button
                :isLoading="getLoading"
                @cus-click="orderActions"
                removeDefault
                class="btn btn-success buy-btn"
              >Buy</g-button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ShippingAddress from '@/components/molecules/ShippingAddress'
import CartItemCheckout from '@/components/molecules/CartItemCheckout'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Checkout',
  data() {
    return {
      home: '',
      receiptName: '',
      address: '',
      city: '',
      receiptPhone: '',
      postalCode: '',
      paymentMethod: ''
    }
  },
  components: {
    CartItemCheckout,
    ShippingAddress
  },
  methods: {
    ...mapActions('address', ['activeAddress']),
    ...mapActions('order', ['postOrder']),
    ...mapMutations('cart', ['CLEAR_CART']),
    orderActions() {
      const d = new Date()
      const day = d.getDate().toString()
      const month = (d.getMonth() + 1).toString()
      const year = d.getFullYear().toString().split('').splice(2, 3).join('')
      const rnd = Math.random(0, 100).toString().substr(14).toString()
      const invoice = day + month + year + rnd
      const productName = []
      const purchaseAmount = []
      const initialPrice = []
      const priceAmount = []
      const color = []
      const size = []
      const products = []
      this.getAllCarts.map((cart) => {
        products.push({
          ...cart.product,
          qty: cart.qty,
          color: cart.detail.color,
          size: cart.detail.size
        })
      })
      products.map((product) => {
        productName.push(product.name)
        purchaseAmount.push(product.qty)
        initialPrice.push(product.price)
        color.push(product.color)
        size.push(product.size)
        priceAmount.push(product.qty * product.price)
      })
      const newOrder = {
        invoice,
        idAddress: this.getActiveAddress.id,
        orders: productName.join(', '),
        purchaseAmount: purchaseAmount.join(', '),
        initialPrice: initialPrice.join(', '),
        priceAmount: priceAmount.join(', '),
        amount: this.cartTotalPrice + 7000,
        color: color.join(', '),
        size: size.join(', '),
        paymentMethod: this.paymentMethod
      }
      this.postOrder(newOrder)
        .then((response) => {
          this.toastSuccess('Order Success')
          this.CLEAR_CART()
          this.$bvModal.hide('my-payment')
          this.$router.push({ name: 'Profile' })
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
  width: 700px;
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
  height: 575px;
  padding: 15px;
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
  width: 720px;
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
