<template>
  <b-container fluid>
      <b-row>
          <b-col cols="3" class="bg-white shadow-sm sidebar">
              <SidebarProfile />
          </b-col>
          <b-col cols="9" class="bg-light">
              <b-container class=" bg-white rounded mt-5 main">
              <b-row class="container">
                <MyOrder />
              </b-row>
              </b-container>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import SidebarProfile from '../components/layout/SidebarProfile'
import MyOrder from '../components/layout/MyOrder'
export default {
  name: 'MyOrderInProfile',
  components: {
    SidebarProfile,
    MyOrder
  }
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
