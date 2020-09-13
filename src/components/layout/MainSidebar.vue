<template>
  <div class="container mt-5 ml-5 mr-auto">
    <!-- =====================================          BAGIAN FOTO PROFILE         ===================================== -->
    <b-row class="text-center mt-5">
      <b-col cols="4" class="mb-2">
        <b-avatar
          src="https://pbs.twimg.com/profile_images/1300740232485068800/KpNhyts7_400x400.jpg"
          size="6rem"
        ></b-avatar>
      </b-col>
      <b-col cols="8" class="text-left">
        <h2 class="text-left mt-3">Johanes Mikael</h2>
        <br />
        <a class="text-muted mt-n2 profile">
          <b-icon icon="pencil" variant="secondary"></b-icon>Ubah profile
        </a>
      </b-col>
      <!-- =====================================          BAGIAN LIST LINK         ===================================== -->
      <b-col cols="12">
        <!-- =====================================          COLLAPSE PARENT 1         ===================================== -->
        <div class="text-left mt-5 ml-5">
          <a
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="true"
            aria-controls="collapseExample"
            class="linkCollapse text-dark"
          >
            <b-icon icon="person-circle" variant="primary"></b-icon>Store
            <b-icon icon="chevron-down" variant="dark" class="ml-5 icons"></b-icon>
          </a>
        </div>
        <!-- =====================================          COLLAPSE CHILD 1         ===================================== -->
        <div class="collapse text-left mt-4" id="collapseExample">
          <div class="ml-5">
            <router-link to class="mb-auto ml-5 text-dark linkChild text-muted">Store profile</router-link>
          </div>
        </div>
      </b-col>
      <b-col cols="12">
        <!-- =====================================          COLLAPSE PARENT 2         ===================================== -->
        <div class="text-left mt-5 ml-5">
          <a
            data-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample"
            class="linkCollapse text-dark"
          >
            <b-icon icon="box-seam" variant="white" class="bg-warning rounded-circle"></b-icon>Product
            <b-icon icon="chevron-down" variant="dark" class="ml-5 icons"></b-icon>
          </a>
        </div>
        <div class="collapse text-left mt-4" id="collapseExample1">
          <!-- =====================================          COLLAPSE CHILD 2         ===================================== -->
          <div class="ml-5">
            <router-link to class="mb-auto ml-5 text-dark linkChild text-muted">My products</router-link>
          </div>
          <div class="ml-5 mt-4">
            <router-link to class="mb-auto ml-5 text-dark linkChild text-muted">Selling products</router-link>
          </div>
        </div>
      </b-col>
      <!-- =====================================          COLLAPSE PARENT 3         ===================================== -->
      <b-col cols="12">
        <div class="text-left mt-5 ml-5">
          <a
            data-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="true"
            aria-controls="collapseExample"
            class="linkCollapse text-dark"
          >
            <b-icon icon="cart3" variant="white" class="bg-danger rounded-circle"></b-icon>Order
            <b-icon icon="chevron-down" variant="dark" class="ml-5 icons"></b-icon>
          </a>
        </div>
        <div class="collapse text-left mt-4" id="collapseExample2">
          <!-- =====================================          COLLAPSE CHILD 3         ===================================== -->
          <div class="ml-5">
            <router-link to class="mb-auto ml-5 text-dark linkChild text-muted">My order</router-link>
          </div>
          <div class="ml-5 mt-4">
            <router-link to class="mb-auto ml-5 text-dark linkChild text-muted">Order cancel</router-link>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'MainSidebar'
}
</script>

<style>
.container {
  /* border: 1px solid black; */
}
.profile {
  font-size: 15px;
  /* border: 1px solid black; */
}
.linkCollapse {
  text-decoration: none !important;
  font-weight: 500;
  font-size: 28px;
  line-height: 24px;
}
.linkChild {
  font-size: 22px;
  line-height: 24px;
}
.icons {
  font-size: 20px;
}

.text-left {
  /* border: 1px solid black; */
}
</style>
