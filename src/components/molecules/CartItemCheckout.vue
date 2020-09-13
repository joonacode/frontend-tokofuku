<template>
  <div class="cart-card">
    <div class="product">
      <img :src="cart.product.image" />
      <div class="detail">
        <h5>{{cart.product.name}}</h5>
        <p>{{cart.product.storeName}} | {{cart.qty}} | {{cart.product.price | currency}}</p>
      </div>
    </div>
    <div class="price">
      <span>{{cart.product.price * cart.qty | currency}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart']
}
</script>

<style scoped>
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
</style>
