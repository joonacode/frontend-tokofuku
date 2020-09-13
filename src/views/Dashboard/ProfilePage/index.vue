<template>
  <g-dashboard title="My Profile" description="Manage your profile information">
    <form @submit.prevent="updateProfileAction">
      <b-row class="mt-3 responsive-profile">
        <div class="col-lg-8 col-md-12">
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="getDetailUser.name" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Email</label>
            <div class="col-sm-9">
              <input type="text" disabled class="form-control" v-model="getDetailUser.email" />
              <input type="hidden" class="form-control" v-model="getDetailUser.image" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Phone number</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="getDetailUser.phone" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Gender</label>
            <div class="col-sm-9">
              <div class="d-flex">
                <b-form-radio
                  class="mr-3"
                  name="some-radios"
                  v-model="getDetailUser.gender"
                  value="m"
                >Laki-laki</b-form-radio>
                <b-form-radio name="some-radios" v-model="getDetailUser.gender" value="f">Perempuan</b-form-radio>
              </div>
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Date Of Birth</label>
            <div class="col-sm-9">
              <b-form-datepicker
                id="example-datepicker"
                v-model="getDetailUser.dateBirth"
                placeholder="Choose a date"
                class="mb-2"
              ></b-form-datepicker>
              <g-button
                removeDefault
                class="btn btn-success rounded-pill px-5 mt-4"
                type="submit"
              >Save</g-button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="border-left responsive-profile-border">
            <div class="text-center px-2">
              <b-avatar v-if="getDetailUser.image" size="100px" :src="getDetailUser.image"></b-avatar>
              <b-avatar v-else size="100px"></b-avatar>
              <b-form-group class="mb-0 mt-3" label-for="file-default">
                <input
                  type="file"
                  class="form-control form-shadow"
                  id="image"
                  ref="image"
                  @change="handleFileUpload()"
                />
              </b-form-group>
            </div>
          </div>
        </div>
      </b-row>
    </form>
  </g-dashboard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      fileImage: ''
    }
  },
  methods: {
    ...mapActions('user', ['updateProfile', 'detailUser']),
    handleFileUpload() {
      this.fileImage = this.$refs.image.files[0]
    },
    updateProfileAction() {
      if (this.fileImage.size > 2097152) {
        this.toastError('Max file size 2 mb')
      } else {
        // eslint-disable-next-line prefer-const
        let formData = new FormData()
        formData.append('image', this.fileImage)
        formData.append('name', this.getDetailUser.name)
        formData.append('phone', this.getDetailUser.phone)
        formData.append('gender', this.getDetailUser.gender)
        formData.append('dateBirth', this.getDetailUser.dateBirth)
        formData.append('oldImage', this.getDetailUser.image)
        this.updateProfile({ data: formData, id: this.getDetailUser.id })
          .then((response) => {
            this.toastSuccess('Profile Updated')
            this.fileImage = ''
          })
          .catch((err) => {
            this.toastError(
              err.data.error.sqlMessage
                ? err.data.error.sqlMessage
                : err.data.error.join(', ')
            )
          })
      }
    }
  },
  mounted() {
    this.detailUser()
  },
  computed: mapGetters('user', ['getDetailUser'])
}
</script>

<style>
@media screen and (max-width: 992px) {
  .responsive-profile {
    flex-direction: column-reverse;
  }
  .col-md-12 .responsive-profile-border {
    border-left: 0 !important;
  }
}
@media screen and (max-width: 767px) {
  .row .responsive-sidebar {
    border-right: 0 !important;
    border-bottom: 1px solid #ddd;
  }
}
</style>
