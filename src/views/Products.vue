<template>
<b-container>
        <div class="row">
            <div class="mt-4 col-12">
                <CorouselBanner /> <!-- Styling lihat di component -->
            </div>
            <div class="col-12 mt-5">
                <h2 class="text-left text-black">Category</h2>
                <p class="text-muted text-left">what are you currently looking for</p>
            </div>
            <div class="col-12 mt-1">
                <CorouselCategory /> <!-- Styling lihat di component -->
            </div>
            <div class="col-12 mt-5">
                <h2 class="text-left text-black">Now</h2>
                <p class="text-muted text-left">you've never seen it before</p>
            </div>
            <div class="col-12 mt-1 row">
            <b-card-group>
                <CardProduct /> <!-- Styling lihat di component -->
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <div class="col-12 mt-5">
                    <h2 class="text-left text-black">Popular</h2>
                    <p class="text-muted text-left">find clothes that are trending recently</p>
                </div>
                <CardProduct /> <!-- Styling lihat di component -->
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
             </b-card-group>
        </div>
    </div>
</b-container>
</template>

<script>
import CardProduct from '../components/layout/CardProduct'
import CorouselCategory from '../components/layout/CorouselCategory'
import CorouselBanner from '../components/layout/CorouselBanner'

export default {
  components: {
    CardProduct,
    CorouselCategory,
    CorouselBanner
  }
}
</script>

<style scoped>
.image {
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
}
.text {
    font-size: 45px;
}
.overflow {
    width:200px;
    height:100px;
    overflow-y:hidden;
    overflow-x:scroll;
}
</style>
