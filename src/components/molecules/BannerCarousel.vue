<template>
  <carousel
    :margin="15"
    :responsive="{0:{items:1},700:{items:2},800:{items:2}}"
    :stagePadding="70"
    :nav="false"
    :autoplay="true"
    :autoplayHoverPause="true"
  >
    <b-img :src="require(`@/assets/images/banner7.jpg`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner1.png`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner2.png`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner4.jpg`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner5.jpg`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner3.jpg`)" fluid alt="Fluid image" class="banner"></b-img>
    <b-img :src="require(`@/assets/images/banner6.jpg`)" fluid alt="Fluid image" class="banner"></b-img>
    <template slot="prev">
      <span class="prev">
        <img :src="require(`@/assets/images/prev.png`)" alt="next" />
      </span>
    </template>

    <template slot="next">
      <span class="next">
        <img :src="require(`@/assets/images/next.png`)" alt="next" />
      </span>
    </template>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel }
}
</script>

<style scoped>
.banner {
  width: 456px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
.image {
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}
.text {
  font-size: 45px;
}
.overflow {
  width: 200px;
  height: 100px;
  overflow-y: hidden;
  overflow-x: scroll;
}

.next {
  position: absolute;
  z-index: 100;
  right: 50px;
  bottom: 95px;
  cursor: pointer;
}
.prev {
  position: absolute;
  z-index: 100;
  left: 50px;
  bottom: 95px;
  cursor: pointer;
}
@media screen and (max-width: 610px) {
  .next img,
  .prev img {
    width: 50px;
  }
}
</style>
