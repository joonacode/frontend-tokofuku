<template>
  <b-container fluid>
      <b-row>
          <b-col cols="3" class="bg-white sidebar shadow-sm">
            <MainSidebar class="mr-n5" />
          </b-col>
          <b-col cols="9" class="bg-light">
              <ProfileCard />
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import MainSidebar from '../components/layout/MainSidebar'
import ProfileCard from '../components/layout/ProfileCard'

export default {
  name: 'storeProfile',
  components: {
    MainSidebar,
    ProfileCard
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
.profile-photo {
    width: 166px;
}
</style>
