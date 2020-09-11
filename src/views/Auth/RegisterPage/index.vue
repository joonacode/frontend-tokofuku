<template>
  <AuthWrapper title="Please sign up with your account">
    <form @submit.prevent="registerAction">
      <div id="account-type">
        <button
          type="button"
          class="customer"
          @click="changeActive"
          :class="[isCustomer?'button-hover' : '']"
        >Customer</button>
        <button
          type="button"
          class="seller"
          @click="changeActive"
          :class="[!isCustomer?'button-hover' : '']"
        >Seller</button>
      </div>
      <div id="body">
        <input type="text" class="form-name" v-model="name" placeholder="Name" />
        <input type="email" class="form-email" v-model="email" placeholder="Email" />
        <input
          v-if="!isCustomer"
          type="text"
          class="form-phone"
          v-model="phone"
          placeholder="Phone number"
        />
        <input
          v-if="!isCustomer"
          type="text"
          class="form-store"
          v-model="store"
          placeholder="Store name"
        />
        <input type="password" class="form-password" v-model="password" placeholder="Password" />
      </div>
      <div id="submit">
        <g-button type="submit" :isLoading="getLoading">Register</g-button>
      </div>
      <div id="foot">
        <span>
          Already have a Tokopedia account?
          <span class="title-info" @click="toLogin">Login</span>
        </span>
      </div>
    </form>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/molecules/AuthWrapper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Register',
  components: {
    AuthWrapper
  },
  data() {
    return {
      isCustomer: true,
      name: '',
      email: '',
      phone: '',
      store: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    changeActive() {
      this.isCustomer = !this.isCustomer
    },
    toLogin() {
      this.$router.push('/login')
    },
    registerAction() {
      const dataRegister = {
        name: this.name,
        email: this.email,
        password: this.password,
        roleId: this.isCustomer ? 3 : 2
      }
      if (!this.isCustomer) {
        dataRegister.phone = this.phone
        dataRegister.storeName = this.store
      }
      this.register(dataRegister)
        .then((response) => {
          this.toastSuccess(
            'Registration success, please check your email to activate your account'
          )
          this.name = ''
          this.email = ''
          this.password = ''
          this.phone = ''
          this.store = ''
          this.isCustomer = true
          this.$router.push({ name: 'Login' })
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
  background-color: #32c33b !important;
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
  background: #32c33b;
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
  color: #32c33b !important;
  font-weight: bold;
  cursor: pointer;
}
</style>
