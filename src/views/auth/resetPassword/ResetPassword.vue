<template>
  <form @submit.stop.prevent>
    <div class="form-group">
      <img src="../../../assets/Vector.png" class="img-brand" />
      <span class="title-brand">TokoFuku</span>
    </div>
    <div class="form-group">
      <span>Reset Password</span>
    </div>
    <div class="form-group">
      <input type="email" class="form-email" id="exampleInputEmail1" placeholder="Email" />
    </div>
    <div class="form-group">
      <span class="title-info">Forgot Password?</span>
    </div>
    <button type="submit" class="btn btn-primary">Primary</button>
    <div class="form-group">
      <span>
        Don't have a Tokofoku account?
        <span class="button-register">Register</span>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ResetPassword'
}
</script>

<style scoped>
/* All Form */
form {
  /* border: 1px solid black; */
  width: 500px;
  margin: 20px auto;
}

/* Settingan for all form group */
.form-group {
  /* border: 1px solid black; */
}

/* Img Brand */
form :nth-child(1) .img-brand {
  /* border: 1px solid black; */
  width: 28px;
  height: 34px;
}

/* Form Title TokoFuku */
form :nth-child(1) .title-brand {
  /* border: 1px solid black; */
  position: relative;
  top: 5px;
  left: 4px;

  color: #32c33b;
  font-weight: bold;
  font-size: 20px;
}

/* Form Please login with your account */
form :nth-child(2) {
  /* border: 1px solid black; */
  margin: 20px 0px 20px 0px;

  font-weight: bolder;
  font-size: 15px;
}

/* Form email */
form :nth-child(4) .form-email {
  width: 100%;
  height: 47px;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  padding-left: 20px;
}

/* Form pasword */
form :nth-child(5) .form-password {
  width: 100%;
  height: 43px;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  padding-left: 20px;
}

/* Forgot Pasword */
form :nth-child(6) .title-info {
  position: relative;
  left: 180px;
  color: #db3022;
  cursor: pointer;
}

.btn.btn-primary {
  background: #db3022;
  border-radius: 20px;
  width: 500px;
  height: 45px;
}

form :last-child span {
  /* border: 1px solid black; */
  position: relative;
  top: 20px;
  color: black;
}

form :last-child span span.button-register {
  /* border: 1px solid black; */
  color: #db3022;
  top: -0px;
  cursor: pointer;
}
</style>
