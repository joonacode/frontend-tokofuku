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
.form-group {
  display: flex;
  align-items: center;
}
/* Img Brand */
.img-brand {
  height: 50px;
}

/* Form Title TokoFuku */
.title-brand {
  font-size: 28px;
  font-weight: bold;
  color: #32c33b;
  padding: 10px 0 0 7px;
}
</style>
