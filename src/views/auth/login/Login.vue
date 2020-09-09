<template>
  <form @submit.stop.prevent>
    <div class="form-group">
      <Brand />
    </div>
    <div class="form-group">
      <span>Please login with your account</span>
    </div>
    <div class="form-group">
      <button
        class="customer"
        @click="changeActiv"
        :class="[isCustomer?'button-hover' : '']"
      >Customer</button>
      <button class="seller" @click="changeActiv" :class="[!isCustomer?'button-hover' : '']">Seller</button>
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
      <g-button>PRIMARY</g-button>
    </div>
    <div class="form-group">
      <span>
        Don't have a Tokopedia account?
        <span class="title-info">Register</span>
      </span>
    </div>
  </form>
</template>

<script>
import Brand from '../../../components/atoms/brand'
export default {
  name: 'Login',
  data() {
    return {
      isCustomer: true
    }
  },
  methods: {
    changeActiv() {
      this.isCustomer = !this.isCustomer
    }
  },
  components: {
    Brand
  }
}
</script>

<style scoped>
/* Container Form */
form {
  /* border: 1px solid black; */
  width: 500px;
  margin: 10px auto;
}

/* Settingan for all form group */
.form-group {
  /* border: 1px solid black; */
}

form :nth-child(2) {
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
  background-color: #db3022 !important;
  color: #ffffff !important;
}

form :nth-child(4) .form-email {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 400px;
  margin-bottom: -5px;
}

form :nth-child(5) .form-password {
  /* border: 1px solid black; */
  border: 1px solid #9b9b9b;
  height: 44px;
  padding-left: 20px;
  border-radius: 4px;
  width: 400px;
}

form :nth-child(6) .title-info {
  /* border: 1px solid black; */
  position: relative;
  left: 130px;

  color: #db3022;
  font-weight: bold;
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
</style>
