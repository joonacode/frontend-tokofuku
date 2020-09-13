<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12" id="navbar">
            </div>
        </div>
        <div class="row" id="body">
            <div class="col-md-8" id="main">
                <div id="title">
                    <span>Checkout</span>
                </div>
                <div id="address">
                    <h5>Shipping Address</h5>
                    <div id="address-card">
                        <span>Andreas Jane</span>
                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                        <div class="address-button">
                            <button data-toggle="modal" data-target="#addressModal">Choose another address</button>
                        </div>
                    </div>
                </div>
                <div id="cart">
                    <div class="cart-card">
                        <div class="product">
                            <img src="../../assets/ex1.png">
                            <div class="detail">
                                <h5>Men's formal suit - Black </h5>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div class="price">
                            <span>$ 20.0</span>
                        </div>
                    </div>
                    <div class="cart-card">
                        <div class="product">
                            <img src="../../assets/ex2.png">
                            <div class="detail">
                                <h5>Men's Jacket jeans</h5>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div class="price">
                            <span>$ 20.0</span>
                        </div>
                    </div>
                    <div class="cart-card">
                        <div class="product">
                            <img src="../../assets/ex1.png">
                            <div class="detail">
                                <h5>Men's formal suit - Black </h5>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div class="price">
                            <span>$ 20.0</span>
                        </div>
                    </div>
                    <div class="cart-card">
                        <div class="product">
                            <img src="../../assets/ex2.png">
                            <div class="detail">
                                <h5>Men's Jacket jeans</h5>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div class="price">
                            <span>$ 20.0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4" id="aside">
                <div class="aside-card">
                    <h5>Shopping summary</h5>
                    <div class="list">
                        <div class="list-card">
                            <h5>Order<span>$ 40.0</span></h5>
                        </div>
                        <div class="list-card">
                            <h5>Delivery<span>$ 5.0</span></h5>
                        </div>
                    </div>
                    <div class="total">
                        <h4>Shopping summary<span>$ 45.0</span></h4>
                    </div>
                    <button class="pay" data-toggle="modal" data-target="#payModal">Select payment</button>
                </div>
            </div>
            <div class="modal fade" id="addressModal" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="container-fluid mdl-address">
                            <div class="row mdl-address-header">
                                <div class="col-md-12">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="row mdl-address-body">
                                <div class="col-md-11 mdl-address-main">
                                    <div class="mdl-address-title">
                                        <h4>Choose another address</h4>
                                    </div>
                                    <button class="dash-box" data-toggle="modal" data-target="#newAddress">
                                        <h4>Add new address</h4>
                                    </button>
                                </div>
                                <div class="col-md-11 mdl-address-list">
                                    <button class="address-box">
                                        <span>Andreas Jane</span>
                                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                        <h4 class="change" data-toggle="modal" data-target="#addressModal">Change address</h4>
                                    </button>
                                    <button class="address-box">
                                        <span>Andreas Jane</span>
                                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                        <h4 class="change" data-toggle="modal" data-target="#addressModal">Change address</h4>
                                    </button>
                                    <button class="address-box">
                                        <span>Andreas Jane</span>
                                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                        <h4 class="change" data-toggle="modal" data-target="#addressModal">Change address</h4>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="newAddress" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="container-fluid new-address">
                            <div class="row new-address-header">
                                <div class="col-md-12">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="row new-address-body">
                                <div class="col-md-11 new-address-main">
                                    <div class="new-address-title">
                                        <h4>Add new address</h4>
                                    </div>
                                    <div class="top-form">
                                        <label class="col-form-label">Save address as (ex : home address, office address)</label>
                                        <input type="text" class="form-control" placeholder="Rumah">
                                    </div>
                                    <div class="new-address-form">
                                        <div class="left-form">
                                            <div class="form-group">
                                                <label class="col-form-label">Recipient's name</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label class="col-form-label">Address</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label class="col-form-label">City or Subdistrict</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="right-form">
                                            <div class="form-group">
                                                <label class="col-form-label">Recipient's telephone number</label>
                                                <input type="tel" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label class="col-form-label">Postal code</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="check">
                                        <input type="checkbox">
                                        <span>Make it the primary address</span>
                                    </div>
                                    <div class="submit">
                                        <button class="cancel-btn" data-dismiss="modal">Cancel</button>
                                        <button class="save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="payModal" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="container-fluid pay-modal">
                            <div class="row pay-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4>Payment</h4>
                            </div>
                            <div class="row pay-body">
                                <div class="pay-method">
                                    <h4>Payment method</h4>
                                    <div class="payment">
                                        <div class="pay-card">
                                            <div class="card-profile">
                                                <div id="paycard-img">
                                                    <img src="../../assets/pay1.png">
                                                </div>
                                                <span>Gopay</span>
                                            </div>
                                            <input type="checkbox">
                                        </div>
                                        <div class="pay-card">
                                            <div class="card-profile">
                                                <div id="paycard-img">
                                                    <img src="../../assets/pay2.png">
                                                </div>
                                                <span>Pos Indonesia</span>
                                            </div>
                                            <input type="checkbox">
                                        </div>
                                        <div class="pay-card">
                                            <div class="card-profile">
                                                <div id="paycard-img">
                                                    <img src="../../assets/pay3.png">
                                                </div>
                                                <span>Mastercard</span>
                                            </div>
                                            <input type="checkbox">
                                        </div>
                                    </div>
                                </div>
                                <div class="border">
                                </div>
                                <div class="shop-sum">
                                    <h4>Shopping summary</h4>
                                    <div class="total-price">
                                        <div class="price-card">
                                            <h4>Order</h4><span>$ 40.0</span>
                                        </div>
                                        <div class="price-card">
                                            <h4>Delivery</h4><span>$ 5.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pay-footer">
                                <div class="total-sum">
                                    <h4>Shopping summary</h4>
                                    <p>$ 45</p>
                                </div>
                                <button class="buy-btn">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Checkout'
}
</script>

<style scoped>
#navbar {
    height: 90px;
    background: #FFFFFF;
    box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
    border-bottom: 1px solid;
}

/* Body */
#body {
    height: 545px;
    overflow: auto;
}
/* Main */
#main {
    padding: 0 0 0 100px;
}

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

/* Address */
#address h5 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: left;
}
#address-card {
    width: 740px;
    height: 190px;
    background: #FFFFFF;
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
    border: 1px solid #9B9B9B;
    border-radius: 25px;
    background: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    color: #9B9B9B;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Product Cart */
#cart {
    margin-top: 20px;
    margin-bottom: 50px;
}
.cart-card {
    width: 740px;
    height: 125px;
    background: #FFFFFF;
    margin-top: 20px;
    box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
    border-radius: 4px;
    padding: 0 45px 0 25px;
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
    background: #AEAEAE;
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
    color: #9B9B9B;
}
.price {
    font-weight: bold;
    font-size: 16px;
    color: #222222;
}

/* Aside */
#aside {
    padding: 90px 0 0 0;
}
.aside-card {
    width: 370px;
    height: 260px;
    background: #FFFFFF;
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
    border-bottom: 1px solid #9B9B9B;
    width: 322px;
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
    color: #9B9B9B;
}
.list-card span {
    color: #222222;
    font-weight: bolder;
    font-size: 18px;
}

.total {
    width: 322px;
    height: 50px;
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
    color: #32C33B;
}

.pay {
    width: 322px;
    height: 35px;
    border-radius: 25px;
    border: none;
    background: #32C33B;
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Modal Address */
.mdl-address  {
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
    border: 1px dashed #9B9B9B;
    background: #FFFFFF;
    border-radius: 8px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.dash-box h4 {
    font-weight: 600;
    font-size: 18px;
    color: #9B9B9B;
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
    background: #FFFFFF;
    border: 1px solid #32C33B;
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
    color: #32C33B;
}

/* Modal New Address */
.new-address  {
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
    color: #9B9B9B;
    text-align: left;
}
.top-form input {
    border: 1px solid #9B9B9B;
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
}
.new-address-form {
    display: flex;
    width: 720px;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    color: #9B9B9B;
}
.new-address-form .form-group {
    margin: 0;
    text-align: left;
}
.new-address-form input {
    border: 1px solid #9B9B9B;
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
    color: #9B9B9B;
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
    border: 1px solid #9B9B9B;
    background: #FFFFFF;
    margin-right: 20px;
    color: #9B9B9B;
}
.save-btn {
    border: none;
    background: #32C33B;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
}

/* Payment Modal */
.pay-modal  {
    height: 575px;
}
.pay-header {
    height: 70px;
    background: #FFFFFF;
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
    border: 2px solid #9B9B9B;
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

.shop-sum {
    width: 450px;
    height: 200px;
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
    color: #9B9B9B;
    margin: 0;
}
.price-card span {
    font-size: 18px;
}

.pay-footer {
    height: 80px;
    background: #FFFFFF;
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
    color: #32C33B;
    text-align: left;
}
.buy-btn {
    width: 160px;
    height: 36px;
    border: none;
    background: #32C33B;
    border-radius: 25px;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
}
</style>
