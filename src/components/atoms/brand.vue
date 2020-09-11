<template>
  <div>
    <div class="form-group">
      <img src="../../assets/Vector.png" class="img-brand" />
      <span class="title-brand">TokoFuku</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand'
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
