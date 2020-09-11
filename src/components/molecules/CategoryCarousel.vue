<template>
  <carousel
    :margin="20"
    :responsive="{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1000:{items:5}}"
    :autoplay="true"
    :nav="false"
    :autoplayHoverPause="true"
  >
    <img :src="require(`@/assets/Group 1236.png`)" class="image" alt="image" />
    <img :src="require(`@/assets/Group 1235.jpg`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1238.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1239.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1240.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1241.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1242.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1243.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1244.png`)" alt="image" class="image" />
    <img :src="require(`@/assets/Group 1245.png`)" alt="image" class="image" />
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
  right: -20px;
  bottom: 110px;
  cursor: pointer;
}
.prev {
  position: absolute;
  z-index: 100;
  left: -20px;
  bottom: 110px;
  cursor: pointer;
}

@media screen and (max-width: 610px) {
  .next,
  .prev {
    display: none;
  }
}
</style>
