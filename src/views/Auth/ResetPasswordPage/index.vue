<template>
  <!-- Form Reset Password Konfirmasi Password-->
  <AuthWrapper title="Reset Password">
    <form @submit.stop.prevent>
      <div class="form-group mt-3">
        <span
          class="title2 mb-4 d-inline-block"
        >You need to change your password to activate your account</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-email" placeholder="Password" />
      </div>
      <div class="form-group">
        <input type="password" class="form-password" placeholder="Confirm Password" />
      </div>
      <g-button @cus-click="ReqResetPass">PRIMARY</g-button>
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
        <g-button class="button" @cus-click="$router.push({name: 'Login'})">Change Password</g-button>
      </div>
      <div class="form"></div>
    </div>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/molecules/AuthWrapper'
export default {
  name: 'ConfirmPassword',
  components: {
    AuthWrapper
  },
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
/* Container Form */

/* Settingan for all form group */

form :nth-child(1) button {
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

.form-group .form-email {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: -5px;
}

.form-group .form-password {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 100%;
}

.form-group .title-info {
  /* border: 1px solid black; */
  float: right;
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
}

.title-info {
  color: #db3022;
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-decoration: none;
}

.title2 {
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
}

.ask a {
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
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
