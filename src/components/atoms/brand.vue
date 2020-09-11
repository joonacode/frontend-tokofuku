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
<<<<<<< HEAD
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
=======
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
>>>>>>> e76f83565976337c32eeefae5a85f26b9f6d3732
}
</style>
