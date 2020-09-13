<template>
  <div>
    <g-dashboard title="Selling Product" class="shadow-sm bg-light">
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="form-group">
            <label>Name of goods</label>
            <input type="text" v-model="name" class="form-control bg-light" />
          </div>
        </div>
      </div>
    </g-dashboard>
    <g-dashboard title="Item Details" class="shadow-sm bg-light mt-4">
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="form-group">
            <label>Unit Price</label>
            <input type="number" v-model="price" class="form-control bg-light" />
          </div>
          <div class="form-group">
            <label>Stock</label>
            <input type="number" v-model="stock" class="form-control bg-light" />
          </div>
          <label>Stock</label>
          <div class="form-group d-flex mb-4">
            <b-form-radio name="some-radios" v-model="condition" class="mr-3" value="Baru">Baru</b-form-radio>
            <b-form-radio name="some-radios" v-model="condition" value="Bekas">Bekas</b-form-radio>
          </div>
          <label for>Jenis Size</label>
          <div class="form-group d-flex">
            <b-form-radio name="some-jenis" v-model="jenisSize" class="mr-3" value="1">Angka</b-form-radio>
            <b-form-radio name="some-jenis" v-model="jenisSize" value="2">Huruf</b-form-radio>
          </div>
          <div class="form-group">
            <label>Size</label>
            <Multiselect
              v-model="valueSize"
              :options="jenisSize === 1 ? options : options2"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template slot="selection" slot-scope="{ values, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} options selected</span>
              </template>
            </Multiselect>
          </div>
          <div class="form-group">
            <label>Color</label>
            <!-- {{valueColor.map(v => v.name).join(', ')}} -->
            <Multiselect
              v-model="valueColor"
              :options="colorOptions"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template slot="selection" slot-scope="{ values, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} options selected</span>
              </template>
            </Multiselect>
          </div>
          <div class="form-group">
            <label>Category</label>
            <Multiselect
              v-model="valueCategory"
              :options="getCategories"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template slot="selection" slot-scope="{ values, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} options selected</span>
              </template>
            </Multiselect>
          </div>
        </div>
      </div>
    </g-dashboard>
    <g-dashboard title="Photo of goods" class="shadow-sm bg-light mt-4">
      <div class="row mt-4">
        <div class="col-md-12">
          <input
            multiple
            type="file"
            class="form-control form-shadow"
            id="image"
            ref="image"
            @change="handleFileUpload()"
          />
        </div>
      </div>
    </g-dashboard>
    <g-dashboard title="Description" class="shadow-sm bg-light mt-4">
      <div class="row mt-4">
        <div class="col-md-12">
          <vue-editor v-model="description"></vue-editor>
        </div>
      </div>
    </g-dashboard>
    <g-button
      @cus-click="addProductAction"
      removeDefault
      class="btn btn-danger rounded-pill btn-lg px-5 float-right mt-5 shadow"
    >Jual</g-button>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { VueEditor } from 'vue2-editor'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fileImage: '',
      name: '',
      price: '',
      stock: '',
      description: '',
      condition: '',
      content: '',
      valueSize: '',
      valueColor: '',
      valueCategory: '',
      jenisSize: 1,
      colorOptions: [
        { name: 'red' },
        { name: 'green' },
        { name: 'blue' },
        { name: 'black' },
        { name: 'lightblue' }
      ],
      options: [
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
        { name: 'XL' },
        { name: 'XLL' }
      ],
      options2: [
        { name: '28' },
        { name: '29' },
        { name: '30' },
        { name: '31' },
        { name: '32' },
        { name: '33' },
        { name: '34' },
        { name: '35' },
        { name: '36' },
        { name: '37' }
      ]
    }
  },
  methods: {
    ...mapActions('product', ['myProducts', 'postProduct']),
    ...mapActions('category', ['allCategories']),
    handleFileUpload() {
      this.fileImage = this.$refs.image.files
    },
    addProductAction() {
      if (!this.valueColor) {
        this.toastError('Please select color')
      } else if (!this.valueSize) {
        this.toastError('Please select size')
      } else if (!this.valueCategory) {
        this.toastError('Please select category')
      } else {
        // eslint-disable-next-line no-unused-vars
        let sizeChecker = 0
        // eslint-disable-next-line prefer-const
        for (var i = 0; i < this.fileImage.length; i++) {
          if (this.fileImage[i].size > 2097152) {
            sizeChecker = 1
          }
        }
        if (sizeChecker === 1) {
          this.toastError('Max file size 2 mb')
        } else if (this.fileImage.length > 5) {
          this.toastError('Max file upload 5')
        } else {
          // eslint-disable-next-line prefer-const
          let formData = new FormData()

          for (let i = 0; i < this.fileImage.length; i++) {
            const file = this.fileImage[i]
            formData.append('image', file)
          }
          formData.append('name', this.name)
          formData.append('price', this.price)
          formData.append('idCategory', this.valueCategory.id)
          formData.append('stock', this.stock)
          formData.append(
            'color',
            this.valueColor.map((v) => v.name).join(', ')
          )
          formData.append('size', this.valueSize.map((v) => v.name).join(', '))
          formData.append('description', this.description)
          formData.append('conditionProduct', this.condition)
          this.postProduct(formData)
            .then((response) => {
              this.toastSuccess('Product Added')
              this.$router.push({ name: 'MyProducts' })
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
    }
  },
  components: { VueEditor, Multiselect },
  mounted() {
    this.allCategories()
  },
  computed: {
    ...mapGetters('user', ['getDetailUser']),
    ...mapGetters('product', ['getMyProducts']),
    ...mapGetters('category', ['getCategories'])
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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
