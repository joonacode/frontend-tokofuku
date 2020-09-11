<template>
  <AuthWrapper title="Please login with your account">
    <form @submit.prevent="loginAction">
      <div class="form-group">
        <button
          type="button"
          class="customer"
          @click="changeActiv"
          :class="[isCustomer?'button-hover' : '']"
        >Customer</button>
        <button
          type="button"
          class="seller"
          @click="changeActiv"
          :class="[!isCustomer?'button-hover' : '']"
        >Seller</button>
      </div>
      <div class="form-group">
        <input type="text" name="email" class="form-email" v-model="email" placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="password" class="form-password" v-model="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <router-link
          class="title-info text-decoration-none"
          :to="{name: 'ForgotPassword'}"
        >Forgot password?</router-link>
      </div>
      <g-button cusClass="mb-4" type="submit" :isLoading="getLoading">Login</g-button>
      <span class="ask" id="foot">
        Don't have a Tokopedia account?
        <router-link :to="{name: 'Register'}">Register</router-link>
      </span>
    </form>
  </AuthWrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthWrapper from '@/components/molecules/AuthWrapper'
export default {
  name: 'Login',
  components: {
    AuthWrapper
  },
  data() {
    return {
      isCustomer: true,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    linkResetPassword() {
      this.$router.push({ name: 'ResetPassword' })
    },
    changeActiv() {
      this.isCustomer = !this.isCustomer
    },
    loginAction() {
      const dataLogin = {
        email: this.email,
        password: this.password
      }
      this.login(dataLogin)
        .then((response) => {
          this.toastSuccess(response.message)
          this.email = ''
          this.password = ''
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          this.toastError(
            err.data.error.sqlMessage
              ? err.data.error.sqlMessage
              : err.data.error.join(', ')
          )
          this.password = ''
        })
    }
  },
  computed: mapGetters(['getLoading'])
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

#foot {
  font-size: 15px;
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
  color: #32c33b !important;
  cursor: pointer;
  display: block;
  font-weight: bold;
}

.ask a {
  margin-bottom: 20px;
  color: #32c33b !important;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
