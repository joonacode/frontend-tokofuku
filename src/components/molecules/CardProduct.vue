<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
    <div class="card card-product border-0">
      <img
        src="https://ae01.alicdn.com/kf/HTB1uKsVRFXXXXaLXVXXq6xXFXXXo/Blazer-pria-pakaian-resmi-terbaru-desain-mantel-celana-tuxedo-jas-pria-kostum-celana-pernikahan-pernikahan-setelan.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <router-link
          class="text-dark text-decoration-none"
          :to="{name: 'DetailProduct', params: {id: product.id}}"
        >
          <h5 class="card-title mb-2">{{product.name}}</h5>
        </router-link>
        <span class="text-danger my-1 font-weight-bold">{{product.price | currency}}</span>
        <span class="text-muted d-block">{{product.storeName}}</span>
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
</template>

<script>
export default {
  props: ['product']
}
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
