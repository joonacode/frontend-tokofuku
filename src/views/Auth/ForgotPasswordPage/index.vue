<template>
  <AuthWrapper title="Reset Password">
    <!-- Form Reset Password Input Email First-->
    <form @submit.stop.prevent>
      <div class="form-group mt-4">
        <input type="email" class="form-email" id="exampleInputEmail1" placeholder="Email" />
      </div>
      <div class="form-group">
        <router-link :to="{name: 'Login'}" class="title-info">Back To Login</router-link>
      </div>
      <router-link :to="{name: 'ResetPassword'}">
        <g-button cusClass="mb-4">PRIMARY</g-button>
      </router-link>
      <span class="ask">
        Don't have a Tokopedia account?
        <a href="#">Register</a>
      </span>
    </form>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/molecules/AuthWrapper'

export default {
  name: 'ResetPassword',
  components: {
    AuthWrapper
  },
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

.ask a {
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
