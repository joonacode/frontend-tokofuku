<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
    <div class="card card-product border-0">
      <img
        src="https://ae01.alicdn.com/kf/HTB1uKsVRFXXXXaLXVXXq6xXFXXXo/Blazer-pria-pakaian-resmi-terbaru-desain-mantel-celana-tuxedo-jas-pria-kostum-celana-pernikahan-pernikahan-setelan.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <router-link class="text-dark text-decoration-none" :to="{name: 'DetailProduct'}">
          <h5 class="card-title mb-2">Men's formal suit - Black & White</h5>
        </router-link>
        <span class="text-danger my-1 font-weight-bold">$ 40.0</span>
        <span class="text-muted d-block">Zalora Cloth</span>
        <b-form-rating
          no-border
          readonly
          size="sm"
          class="p-0"
          show-value
          variant="warning"
          inline
          value="4"
        ></b-form-rating>
      </div>
    </div>
  </div>
  <!-- <b-card
    title="Men Formal Suit Premium Quality"
    img-src="https://ae01.alicdn.com/kf/HTB1uKsVRFXXXXaLXVXXq6xXFXXXo/Blazer-pria-pakaian-resmi-terbaru-desain-mantel-celana-tuxedo-jas-pria-kostum-celana-pernikahan-pernikahan-setelan.jpg"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      <span class="text-danger font-weight-bold">$ 40.0</span>
      <br />
      <span class="text-muted">Zalora Cloth</span>
      <br />
      <span class="text-muted">
        <b-icon icon="star-fill" variant="warning"></b-icon>
        <b-icon icon="star-fill" variant="warning"></b-icon>
        <b-icon icon="star-fill" variant="warning"></b-icon>
        <b-icon icon="star-fill" variant="warning"></b-icon>
        <b-icon icon="star-fill"></b-icon>(10)
      </span>
    </b-card-text>
  </b-card>-->
</template>

<script>
export default {}
</script>

<style scoped>
.card-product {
  border-radius: 8px !important;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 8px;
}
.card-product img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.card-product .card-title {
  font-size: 18px;
  line-height: 24px;
}
</style>
