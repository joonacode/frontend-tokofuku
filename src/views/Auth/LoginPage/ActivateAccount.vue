<template>
  <span class="d-none">Hole</span>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['verifyAccount'])
  },
  mounted() {
    const token = this.$route.query.token
    this.verifyAccount({ token })
      .then((response) => {
        this.toastSuccess(response.message)
        this.$router.push({ name: 'Login' })
      })
      .catch((err) => {
        this.toastError(
          err.data.error.sqlMessage
            ? err.data.error.sqlMessage
            : err.data.error.join(', ')
        )
        this.$router.push({ name: 'Login' })
      })
  }
}
</script>
