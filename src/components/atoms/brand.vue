<template>
  <router-link :to="{name:'Home'}" class="text-decoration-none">
    <div class="form-group" :class="cusClass">
      <img src="../../assets/Vector.png" :width="width" class="img-brand" />
      <span class="title-brand">TokoFuku</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Brand',
  props: {
    width: Number,
    cusClass: String
  }
}
</script>

<style scoped>
/* Img Brand */
.form-group .img-brand {
  /* border: 1px solid black; */
  width: 30px;
  height: 36px;
}

/* Form Title TokoFuku */
.form-group .title-brand {
  /* border: 1px solid black; */
  position: relative;
  top: 5px;
  left: 4px;

  color: #32c33b;
  font-weight: bold;
  font-size: 23px;
}
</style>
