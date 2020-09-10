<template>
  <div>
    <!-- Form Reset Password Input Email First-->
    <form @submit.stop.prevent>
      <div class="form-group">
        <g-brand></g-brand>
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
      <router-link to="/confirmPassword">
        <g-button>PRIMARY</g-button>
      </router-link>
      <div class="form-group">
        <span>
          Don't have a Tokofoku account?
          <span class="button-register">Register</span>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {}
  },
  methods: {
    linkConfirm() {
      this.$router.push({ name: 'ConfirmPassword' })
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

/* Form Please login with your account */
form :nth-child(2) {
  /* border: 1px solid black; */
  margin: 20px 0px 20px 0px;

  font-weight: bolder;
  font-size: 15px;
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
form :nth-child(4) .title-info {
  position: relative;
  left: 140px;
  color: #db3022;
  cursor: pointer;
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
