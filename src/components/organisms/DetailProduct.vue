<template>
  <div class="container">
    <div class="mb-4 mt-5">
      <BreadcrumbItem />
    </div>
    <!-- Main Img Side Rigt -->
    <div class="row border-bottom pb-4">
      <div class="col-md-4">
        <div class="main-img">
          <div class="big-img">
            <img class="img-fluid" src="../../assets/img-product/big-img.png" />
          </div>
          <div class="small-img mb-4">
            <img class="img-fluid" src="../../assets/img-product/small-img1.png" />
            <img class="img-fluid" src="../../assets/img-product/small-img2.png" />
            <img class="img-fluid" src="../../assets/img-product/small-img3.png" />
            <img class="img-fluid" src="../../assets/img-product/small-img4.png" />
            <img class="img-fluid" src="../../assets/img-product/small-img4.png" />
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="main-choice">
          <div class="title-product">Baju muslim pira</div>
          <div class="seller-name">Zalora Cloth</div>
          <div class="star-seller">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span>(10)</span>
          </div>
          <div class="title-price">Price</div>
          <div class="price">$ 20.0</div>
          <div class="title-color">Color</div>
          <!-- Button color -->
          <div class="button-color">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <!-- Button Size && Jumlah -->
          <div class="size">
            <div>
              Size
              <br />
              <span>-</span>
              <span>38</span>
              <span>+</span>
            </div>
            <div>
              Jumlah
              <br />
              <span>-</span>
              <span>2</span>
              <span>+</span>
            </div>
          </div>
          <div class="mt-4 mb-5 d-flex justify-content-between align-items-center">
            <g-button
              removeDefault
              class="btn-outline-success rounded-pill mr-2 w-25 small-btn"
            >Chat</g-button>
            <g-button
              removeDefault
              class="btn-outline-success rounded-pill mr-2 w-25 small-btn"
            >Add Bag</g-button>
            <g-button class="w-75 medium-btn">Buy Now</g-button>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <!-- Class Description -->
        <div class="description">
          <div class="title-info mb-4">Informasi Produk</div>
          <div class="title-condition">
            Condition
            <br />
            <span>New</span>
          </div>
          <div class>
            <span class="title-condition d-block">Descriptionxxx</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur omnis! Modi voluptatum officia quasi ducimus</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur omnis! Modi voluptatum officia quasi ducimus
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, eos, illo sapiente possimus dolorem ex veritatis est veniam
              quae numquam nesciunt inventore accusamus maiores consequatur hic nisi ipsa ea facilis laborum asperiores fugit magnam dignissimos
              aperiam. Perspiciatis repellat cupiditate minus quod fugit provident id maxime corrupti beatae! Ut, quaerat porro?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur omnis! Modi voluptatum officia quasi ducimus
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sequi quidem sapiente fugiat inventore doloremque aliquid
              laboriosam dignissimos cumque maiores. Consequatur provident quae quo minus expedita ipsa repellat iste sapiente.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur omnis! Modi voluptatum officia quasi ducimus</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-2">
        <div class="product-review d-block">
          <div class="title">Product review</div>
          <div class="rating">
            <div class="number-rating">
              <span class="number">5.0</span>
              <span class="number-child">/10</span>
              <br />
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <div class="review-rating">
              <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <div class="star-rating">
                <span class="num">5</span>
                <span class="num">4</span>
                <span class="num">3</span>
                <span class="num">2</span>
                <span class="num">1</span>
              </div>
              <div class="progres-rating">
                <b-progress :value="100" class="mb-3 progres" variant="danger"></b-progress>
                <b-progress :value="90" class="mb-3 progres" variant="danger"></b-progress>
                <b-progress :value="0" class="mb-3 progres" variant="danger"></b-progress>
                <b-progress :value="0" class="mb-3 progres" variant="danger"></b-progress>
                <b-progress :value="0" class="mb-3 progres" variant="danger"></b-progress>
              </div>
              <div class="star-rating">
                <span class="num">48</span>
                <span class="num">27</span>
                <span class="num">0</span>
                <span class="num">0</span>
                <span class="num">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mt-5">
        <h2 class="text-left text-black font-weight-bold">You can also like this</h2>
        <p class="text-muted text-left">You’ve never seen it before!</p>
      </div>
    </div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/molecules/ProductList'

import BreadcrumbItem from '@/components/molecules/BreadcrumbItem'
export default {
  name: 'DetailProduct',
  data() {
    return {}
  },
  components: {
    BreadcrumbItem,
    ProductList
  }
}
</script>

<style scoped>
/* Class Main-img */
.main-img {
  /* border: 1px solid black; */
  flex: 1;

  display: flex;
  flex-direction: column;
}
.main-img .big-img {
  /* border: 1px solid black; */
  flex: 2;
}
.main-img .big-img img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
}

/* Class Small img */
.main-img .small-img {
  /* border: 1px solid black; */
  flex: 1;
  padding-top: 10px;

  display: flex;
}
.main-img .small-img img {
  width: 30px;
  height: 65px;
  object-fit: cover;

  border-radius: 7px;
}
.main-img .small-img :first-child {
  /* border: 1px solid black; */
  padding: 0px 4px 0px 4px;
  flex: 1;
}
.main-img .small-img :nth-child(2) {
  /* border: 1px solid black; */
  padding: 0px 4px 0px 4px;
  flex: 1;
}
.main-img .small-img :nth-child(3) {
  /* border: 1px solid black; */
  padding: 0px 4px 0px 4px;
  flex: 1;
}
.main-img .small-img :nth-child(4) {
  /* border: 1px solid black; */
  padding: 0px 4px 0px 4px;
  flex: 1;
}
.main-img .small-img :last-child {
  /* border: 1px solid black; */
  padding: 0px 4px 0px 4px;
  flex: 1;
}

/* Class Main-choice */
.container .main-choice {
  /* border: 1px solid black; */
  flex: 2;
  text-align: left;
}

.main-choice .title-product {
  /* border: 1px solid black; */
  font-size: 26px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.main-choice .seller-name {
  /* border: 1px solid black; */
  color: #9b9b9b;

  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.main-choice .star-seller {
  /* border: 1px solid black; */

  font-size: 17px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.checked {
  color: orange;
}
.main-choice .title-price {
  /* border: 1px solid black; */
  color: #9b9b9b;

  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.main-choice .price {
  font-size: 22px;
  font-weight: bolder;
  margin-bottom: 10px;
  /* border: 1px solid black; */
}

/* Css Color */
.main-choice .title-color {
  /* border: 1px solid black; */

  font-size: 17px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.main-choice .button-color {
  /* border: 1px solid black; */

  font-size: 22px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.main-choice .button-color span {
  /* border: 1px solid black; */
  display: inline-block;
  width: 32px;
  margin-left: 10px;

  border-radius: 100%;
}
.main-choice .button-color :first-child {
  background: #1a1a1a;
  margin-left: 0;
  height: 32px;
}
.main-choice .button-color :nth-child(2) {
  background: #d84242;
  height: 32px;
}
.main-choice .button-color :nth-child(3) {
  background: #4290d8;
  height: 32px;
}
.main-choice .button-color :last-child {
  background: #42d86c;
  height: 32px;
}

/* Class size */

.main-choice .size div {
  /* border: 1px solid black; */
  display: inline-block;
  height: 60px;
  width: 170px;

  font-weight: bolder;
}

.main-choice .size div span {
  /* border: 1px solid black; */
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  padding-top: 2px;
  background: #d4d4d4;

  border-radius: 100%;
}

.main-choice .size div :nth-child(3) {
  /* border: 1px solid black; */
  background: white;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 6px;
}

/* Class Button */
.main-choice .button {
  /* border: 1px solid black; */
  display: inline-block;
  margin-top: 30px;

  width: 700px;
  display: flex;
}
.main-choice .button .medium-btn {
  /* border: 1px solid black; */
  margin-right: 15px;
  width: 300px;
}
.main-choice .button .small-btn {
  border: 1.5px solid #222222;
  margin-right: 15px;
  width: 150px;
  background: #ffffff;
  color: black;
}

/* Class Description */
.container .description {
  /* border: 1px solid black; */
  text-align: left;
}
/* Class Informasi product */
.container .description .title-info {
  /* border: 1px solid black; */
  margin-bottom: 10px;

  font-size: 28px;
  font-weight: bold;
}
/* Class Condition */
.container .description .title-condition {
  /* border: 1px solid black; */
  margin-bottom: 18px;

  font-weight: bold;
  font-size: 18px;
}
.container .description .title-condition span {
  /* border: 1px solid black; */
  color: #db3022;
  font-weight: normal;
}
.container .description .title-description {
  /* border: 1px solid black; */
  color: #9b9b9b;
}
.container .description .title-description .description {
  /* border: 1px solid black; */
  font-size: 18px;
  color: #222222;
  font-weight: 600;
}

/* Class product review */
.container .product-review {
  /* border: 1px solid black; */
  margin-top: 20px;
  width: 100%;
  text-align: left;
}

@media screen and (max-width: 500px) {
  .rating {
    flex-direction: column;
  }
  .number-rating {
    margin-bottom: 20px;
  }
}

.product-review .rating {
  /* border: 1px solid black; */
  display: flex;
}

.product-review .title {
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
}
/* Number Rating */
.product-review .rating .number-rating {
  /* border: 1px solid black; */
  padding-top: 20px;
  margin-right: 40px;
}
.product-review .rating .number-rating .fa.fa-star {
  /* border: 1px solid black; */
  width: 25px;
  height: 25px;
  font-size: 25px;
}
.rating .number-rating .number {
  font-size: 45px;
  font-weight: bold;
}
.rating .number-rating .number-child {
  color: #9b9b9b;
}

/* Review rating */
.product-review .rating .review-rating {
  /* border: 1px solid black; */
  flex: 1;
}
.product-review .rating .review-rating .star-rating {
  /* border: 1px solid black; */
  display: inline-block;
  color: #9b9b9b;
  font-weight: 600;
  font-size: 18px;
}
.product-review .rating .review-rating .star-rating .num {
  position: relative;
  top: 3px;
}
.product-review .rating .review-rating .star-rating span {
  /* border: 1px solid black; */
  display: block;
  width: 20px;
  height: 27px;
  margin: 0px 10px 0px 0px;
}

.product-review .rating .review-rating .progres-rating {
  /* border: 1px solid black; */
  display: inline-block;
  width: 150px;
  height: 12px;
  margin-left: 10px;
  margin-right: 10px;

  position: relative;
  /* top: -85px; */
}

.product-review .rating .review-rating .progres-rating .progres {
  height: 11px;
}
</style>
