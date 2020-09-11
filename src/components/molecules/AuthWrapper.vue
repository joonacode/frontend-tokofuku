<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-5 col-md-7 text-center mx-auto">
        <div class="form-group mb-4">
          <g-brand></g-brand>
        </div>
        <div class="auth-title my-3">
          <span>{{title}}</span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
/* Container Form */

/* Settingan for all form group */

.auth-title {
  font-size: 15px;
  font-weight: bolder;
}

form :nth-child(3) button {
  /* border: 1px solid black; */
  height: 45px;
  width: 110px;
  margin: 10px 0px 10px 0px;

  color: #9b9b9b;
  background: #ffffff;
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
}
.form-group .customer {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.form-group .seller {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.button-hover {
  background-color: #32c33b !important;
  color: #ffffff !important;
}

form :nth-child(4) .form-email {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: -5px;
}

form :nth-child(5) .form-password {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 100%;
}

form :nth-child(6) .title-info {
  /* border: 1px solid black; */
  float: right;
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
}

form :last-child span span.title-info {
  color: #db3022;
  cursor: pointer;

  font-weight: bold;
}
</style>
