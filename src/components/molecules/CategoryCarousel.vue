<template>
  <carousel
    v-if="getCategories.length > 0"
    :margin="20"
    :responsive="{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1000:{items:5}}"
    :autoplay="true"
    :nav="false"
    :autoplayHoverPause="true"
    :autoplayTimeout="2000"
  >
    <router-link
      v-for="category in getCategories"
      :key="category.id"
      :to="{name: 'Category', params:{id: category.id}}"
    >
      <img :src="category.image" class="image" alt="image" />
    </router-link>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { carousel },
  methods: mapActions('category', ['allCategories']),
  mounted() {
    this.allCategories()
  },
  computed: {
    ...mapGetters('category', ['getCategories']),
    ...mapGetters(['getLoading'])
  }
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
