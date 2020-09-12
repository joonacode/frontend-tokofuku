import {
  mapActions
} from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['logoutUser']),
    logoutMixin() {
      this.confirmSwal('Logout', 'Are you sure you want to log out ?', 'warning', () => {
        this.logoutUser()
        this.$router.push({
          name: 'Login'
        })
        this.toastSuccess('Logout success')
      })
    }
  }
}
