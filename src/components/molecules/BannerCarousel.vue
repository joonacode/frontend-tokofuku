<template>
  <carousel
    :margin="15"
    :responsive="{0:{items:1},700:{items:2},800:{items:3}}"
    :stagePadding="70"
    :nav="false"
    :autoplay="true"
    :autoplayHoverPause="true"
  >
    <b-img
      src="https://id-test-11.slatic.net/p/4f35f5774bc887b4a984ff9b89dfcfee.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://folkswedding.com/js/fileman/Uploads/prewed%20background%20polos/201.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://cdn-image.hipwee.com/wp-content/uploads/2019/04/hipwee-43049075_726933011003614_6004018620840017920_n-640x800.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://1.bp.blogspot.com/-8B9CWsFeEW8/XRfuWcursHI/AAAAAAAAD0M/5vmxwCotz6cE_41LL2OseyFP7RmKs4KbQCLcBGAs/s640/foto-keluarga-studio-berdiri-sandar-background-abu-keren.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://1.bp.blogspot.com/-8B9CWsFeEW8/XRfuWcursHI/AAAAAAAAD0M/5vmxwCotz6cE_41LL2OseyFP7RmKs4KbQCLcBGAs/s640/foto-keluarga-studio-berdiri-sandar-background-abu-keren.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://1.bp.blogspot.com/-8B9CWsFeEW8/XRfuWcursHI/AAAAAAAAD0M/5vmxwCotz6cE_41LL2OseyFP7RmKs4KbQCLcBGAs/s640/foto-keluarga-studio-berdiri-sandar-background-abu-keren.jpg"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
    <b-img
      src="https://isellerdotblog.files.wordpress.com/2020/06/adult-bag-beauty-model-blue-background-1126993.jpg?w=1024"
      fluid
      alt="Fluid image"
      class="banner"
    ></b-img>
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
