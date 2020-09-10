<template>
  <form @submit.stop.prevent>
    <div id="head">
      <Brand/>
    </div>
    <div id="underhead">
      <span>Please sign up with your account</span>
    </div>
    <div id="account-type">
      <button
        class="customer"
        @click="changeActive"
        :class="[isCustomer?'button-hover' : '']"
      >Customer</button>
      <button
        class="seller"
        @click="changeActive"
        :class="[!isCustomer?'button-hover' : '']"
        >Seller</button>
    </div>
    <div v-if="isCustomer" id="body">
      <input type="text" class="form-name" placeholder="Name" />
      <input type="email" class="form-email" placeholder="Email" />
      <input type="password" class="form-password" placeholder="Password" />
    </div>
    <div v-if="!isCustomer" id="body">
      <input type="text" class="form-name" placeholder="Name"/>
      <input type="email" class="form-email" placeholder="Email"/>
      <input type="tel" class="form-phone" placeholder="Phone number"/>
      <input type="text" class="form-store" placeholder="Store name"/>
      <input type="password" class="form-password" placeholder="Password"/>
    </div>
    <div id="submit">
      <button>PRIMARY</button>
    </div>
    <div id="foot">
      <span>
        Already have a Tokopedia account?
        <span class="title-info" @click="toLogin">Login</span>
      </span>
    </div>
  </form>
</template>

<script>
import Brand from '../../../components/atoms/brand'

export default {
  name: 'Register',
  components: {
    Brand
  },
  data () {
    return {
      isCustomer: true
    }
  },
  methods: {
    changeActive () {
      this.isCustomer = !this.isCustomer
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
/* Container Form */
form {
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#head {
  height: 75px;
  display: flex;
  align-items: center;
}

#underhead {
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

#account-type button {
  height: 45px;
  width: 120px;
  margin: 10px 0;
  font-size: 15px;
  color: #9b9b9b;
  background: #ffffff;
  border: 1px solid #9b9b9b;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  cursor: pointer;
}
.customer {
  border-radius: 4px 0 0 4px;
}
.seller {
  border-radius: 0 4px 4px 0;
}
.button-hover {
  background-color: #32C33B  !important;
  color: #ffffff !important;
}

#body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
#body input {
  height: 40px;
  width: 400px;
  margin-top: 10px;
  padding-left: 20px;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  border: 1px solid #9b9b9b;
  border-radius: 4px;
  font-size: 15px;
}
#submit {
  height: 90px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
#submit button {
  background: #32C33B;
  border-radius: 20px;
  border: none;
  color: white;
  width: 420px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
}
#foot {
  font-size: 15px;
}
.title-info {
  color: #32C33B;
  font-weight: bold;
  cursor: pointer;
}
</style>
