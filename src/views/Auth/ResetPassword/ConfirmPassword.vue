<template>
  <!-- Form Reset Password Konfirmasi Password-->
  <div>
    <form @submit.stop.prevent>
      <div class="form-group">
        <g-brand></g-brand>
      </div>
      <div class="form-group">
        <span class="title1">Reset Password</span>
        <br />
        <br />
        <span class="title2">You need to change your password to activate your account</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-email" placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="password" class="form-password" placeholder="Password" />
      </div>
      <div class="form-group">
        <span class="title-info">Forgot password?</span>
      </div>
      <div class="form-group">
        <div @click="ReqResetPass">
          <g-button>PRIMARY</g-button>
        </div>
      </div>
      <div class="form-group">
        <span>
          Don't have a Tokopedia account?
          <span class="title-info">Register</span>
        </span>
      </div>
    </form>

    <!-- Modal Req Reset Password-->
    <div class="overlay" v-if="isShow">
      <div class="form">
        <g-brand class="brand"></g-brand>
      </div>
      <div class="form">
        <span>
          Request to Reset Your Account
          <br />Password
        </span>
      </div>
      <div class="form">
        <img src="../../../assets/lock.png" />
      </div>
      <div class="form">
        <span>
          The following is the button for you to reset
          <br />the password.
        </span>
      </div>
      <div class="form">
        <g-button class="button">Change Password</g-button>
      </div>
      <div class="form"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPassword',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    ReqResetPass() {
      this.isShow = !this.isShow
    }
  }
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

/* Reset Password */
form :nth-child(2) {
  /* border: 1px solid black; */
  margin: 20px 0px 20px 0px;

  font-weight: bolder;
  font-size: 16px;
}

form :nth-child(2) span.title1 {
  font-size: 16px;
}
form :nth-child(2) span.title2 {
  font-size: 14px;
  color: #db3022;
}

/* Form email */
form :nth-child(3) .form-email {
  width: 80%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  padding-left: 20px;
}

form :nth-child(4) .form-password {
  width: 80%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  padding-left: 20px;
}

/* Forgot Pasword */
form :nth-child(5) .title-info {
  position: relative;
  left: 140px;
  color: #db3022;
  cursor: pointer;
}

form :last-child {
  /* border: 1px solid black; */
}
form :last-child span span.title-info {
  color: #db3022;
  cursor: pointer;

  font-weight: bold;
}

/* Class Modal Request Reset Password */
div .overlay {
  border: 1px solid black;
  width: 470px;
  margin: auto;
  position: fixed;
  top: 40px;
  left: 390px;

  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
}

div .form {
  /* border: 1px solid black; */
}

.overlay :nth-child(1) {
  margin-top: 6px;
  margin-bottom: 15px;
}

.overlay :nth-child(2) {
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 15px;
}

.overlay :nth-child(2) span {
  font-weight: bold;
}
/* Img Lock */
.overlay :nth-child(3) {
  margin-bottom: 10px;
}

.overlay :nth-child(3) img {
  width: 150px;
  height: 150px;
}

.overlay :nth-child(4) {
  margin-bottom: 10px;
}
.overlay :nth-child(4) span {
  font-weight: bold;
  color: #46505c;
  font-size: 12px;
}

/* Button Change password */
.overlay :nth-child(5) {
  margin-bottom: 25px;
}
.overlay :nth-child(5) .button {
  width: 300px;
  height: 42px;
}

.overlay :nth-child(6) {
  height: 20px;
  background: #32c33b;
}
</style>
