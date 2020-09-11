<template>
  <AuthWrapper title="Reset Password">
    <!-- Form Reset Password Input Email First-->
    <form @submit.prevent="forgotPasswordAction">
      <div class="form-group mt-4">
        <input
          type="email"
          class="form-email"
          v-model="email"
          id="exampleInputEmail1"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <router-link :to="{name: 'Login'}" class="title-info text-decoration-none">Back To Login</router-link>
      </div>
      <g-button type="submit" cusClass="mb-4" :isLoading="getLoading">Request Change Password</g-button>
      <span class="ask" id="foot">
        Don't have a Tokopedia account?
        <router-link :to="{name: 'Register'}" class="title-info">Register</router-link>
      </span>
    </form>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/molecules/AuthWrapper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ResetPassword',
  components: {
    AuthWrapper
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions('auth', ['forgotPassword']),
    linkConfirm() {
      this.$router.push({ name: 'ConfirmPassword' })
    },
    forgotPasswordAction() {
      const dataLogin = {
        email: this.email
      }
      this.forgotPassword(dataLogin)
        .then((response) => {
          this.toastSuccess(response.message)
          this.email = ''
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err)
          this.toastError(
            err.data.error.sqlMessage
              ? err.data.error.sqlMessage
              : err.data.error.join(', ')
          )
          this.email = ''
        })
    }
  },
  computed: mapGetters(['getLoading'])
}
</script>

<style scoped>
/* Container Form */

/* Settingan for all form group */
#foot {
  font-size: 15px;
}
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
  color: #32c33b !important;
  cursor: pointer;
  font-weight: bold;
}

.ask a {
  margin-bottom: 20px;
  color: #db3022;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
