<template>
  <b-container fluid>
      <b-row>
          <b-col cols="3" class="bg-warning sidebar">

          </b-col>
          <b-col cols="9" class="bg-light">
              <b-container class=" bg-white rounded mt-5 main">
              <b-row class="container">
                  <b-col cols="12">
                      <h1 class="text-left mt-5 order">My Order</h1>
                  </b-col>
                  <b-col cols="12" class="border-bottom">
                    <div>
                        <b-nav>
                            <b-nav-item href="#1" class="link">All Items</b-nav-item>
                            <b-nav-item href="#2" class="link">Not Yet Paid</b-nav-item>
                            <b-nav-item href="#2" class="link">Packed</b-nav-item>
                            <b-nav-item href="#2" class="link">Sent</b-nav-item>
                            <b-nav-item href="#2" class="link">Completed</b-nav-item>
                            <b-nav-item href="#2" class="link">Order Cancel</b-nav-item>
                        </b-nav>
                    </div>
                  </b-col>
              </b-row>
              </b-container>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
    height: 1000px;
}
.main {
    height: 800px;
}
.order {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #222222;
}
.link {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-right: 50px;
    color: #9B9B9B;
}
.link:active,
.link:hover{
    text-decoration: none !important;
    color: #DB3022;
    border-bottom: solid #DB3022;
}

</style>
