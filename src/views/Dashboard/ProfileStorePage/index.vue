<template>
  <g-dashboard title="My Profile" description="Manage your profile information">
    <form @submit.prevent="updateStoreAction">
      <b-row class="mt-3 responsive-profile">
        <div class="col-lg-8 col-md-12">
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Store name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="getDetailUser.storeName" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Email</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" disabled v-model="getDetailUser.email" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Phone number</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="getDetailUser.phone" />
              <input type="hidden" class="form-control" v-model="getDetailUser.storeImage" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="colFormLabelLg" class="col-sm-3">Store description</label>
            <div class="col-sm-9">
              <textarea type="text" class="form-control" v-model="getDetailUser.storeDescription"></textarea>
              <g-button
                removeDefault
                class="btn btn-success rounded-pill px-5 mt-5"
                type="submit"
              >Save</g-button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="border-left responsive-profile-border">
            <div class="text-center px-2">
              <b-avatar
                v-if="getDetailUser.storeImage"
                size="100px"
                :src="getDetailUser.storeImage"
              ></b-avatar>
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
  name: 'storeProfile',
  data() {
    return {
      fileImage: ''
    }
  },
  methods: {
    ...mapActions('user', ['updateStore', 'detailUser']),
    handleFileUpload() {
      this.fileImage = this.$refs.image.files[0]
    },
    updateStoreAction() {
      // eslint-disable-next-line prefer-const
      let formData = new FormData()
      formData.append('image', this.fileImage)
      formData.append('storeName', this.getDetailUser.storeName)
      formData.append('phone', this.getDetailUser.phone)
      formData.append('storeDescription', this.getDetailUser.storeDescription)
      formData.append('oldImage', this.getDetailUser.image)
      this.updateStore({ data: formData, id: this.getDetailUser.id })
        .then((response) => {
          this.toastSuccess('Profile Store Updated')
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
