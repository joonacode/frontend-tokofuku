<template>
<div>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="text-left" id="staticBackdropLabel"><b-icon icon="x" variant="secondary" font-scale="1.5" class="ml-2"></b-icon>Filter</h2>
      </div>
      <div class="modal-body">
        <b-row>
          <b-col cols="12" class="shadow-sm pb-4">
            <h3 class="text-left">Colors</h3>
            <b-button-group size="lg ml-n5 mr-3 mt-4">
                <b-button class="btn btb-lg bg-dark ml-3 rounded-circle buttonCustom"></b-button>
                <b-button class="btn btb-lg bg-white ml-3 rounded-circle buttonCustom"></b-button>
                <b-button class="btn btb-lg bg-danger ml-3 rounded-circle buttonCustom"></b-button>
                <b-button class="btn btb-lg bg-light ml-3 rounded-circle buttonCustom"></b-button>
                <b-button class="btn btb-lg bg-warning ml-3 rounded-circle buttonCustom"></b-button>
                <b-button class="btn btb-lg bg-primary ml-3 rounded-circle buttonCustom"></b-button>
            </b-button-group>
          </b-col>
          <b-col cols="12" class="mt-5 text-left shadow-sm pb-4">
            <h3>Size</h3>
            <b-button-group size="lg text-center mt-4">
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark buttonCustom">S</b-button>
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark buttonCustom">M</b-button>
                <b-button class="btn btn-lg bg-success ml-3 rounded buttonCustom">L</b-button>
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark buttonCustom">XL</b-button>
            </b-button-group>
          </b-col>
          <b-col cols="12" class="text-left shadow-sm mt-4">
            <h3>Category</h3>
            <b-button-group size="lg text-center mt-2 row pb-4">
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark col-3 mt-2">All</b-button>
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark col-3 mt-2">Women</b-button>
                <b-button class="btn btn-lg bg-success ml-3 rounded col-3 mt-2">Men</b-button>
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark col-3 mt-2">Boys</b-button>
                <b-button class="btn btn-lg bg-white ml-3 rounded text-dark col-3 mt-2">Girls</b-button>
            </b-button-group>
          </b-col>
          <b-col cols="12" class="mt-2 text-left">
            <!-- =====================================          COLLAPSE PARENT 1         ===================================== -->
            <div class="text-left mt-5">
                <h3>Brand</h3>
                <a data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample" class="text-dark">
                  <span class="text-muted">adidas Originals, Jack & Jones, s.Oliver<b-icon icon="chevron-down" variant="dark" class="ml-5 icons"></b-icon></span>
                </a>
            </div>
            <div class="collapse text-left mt-4 ml-4" id="collapseExample">
                <div class="mt-2">
                <router-link to="" class="mb-auto text-dark text-muted">adidas</router-link>
                </div>
                <div class="mt-2">
                <router-link to="" class="mb-auto text-dark text-muted">Jack & Jones</router-link>
                </div>
                <div class="mt-2">
                <router-link to="" class="mb-auto text-dark text-muted">s.Oliver</router-link>
                </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="modal-footer row">
        <button type="button" class="btn btn-lg btn-block btn-white rounded-pill border col-4" data-dismiss="modal">Discard</button>
        <button type="button" class="btn btn-lg btn-block btn-success rounded-pill border col-4 mr-4">Apply</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.modal {
    display: block;
}
.buttonCustom {
  height: 50px;
  width: 50px;
}
</style>
