<template>
<div class="container mt-5 ml-5 mr-auto">
    <!-- =====================================          BAGIAN FOTO PROFILE         ===================================== -->
    <b-row class="text-center mt-5">
        <b-col cols="4" class="mb-2">
            <b-avatar src="https://pbs.twimg.com/profile_images/1300740232485068800/KpNhyts7_400x400.jpg" size="7rem"></b-avatar>
        </b-col>
        <b-col cols="8" class="text-left">
            <h2 class="text-left mt-3">Johanes Mikael</h2>
            <br><a class="text-muted mt-n2 profile"><b-icon icon="pencil" variant="secondary"></b-icon> Ubah profile</a>
        </b-col>
    <!-- =====================================          BAGIAN LIST LINK         ===================================== -->
        <b-col cols="12">
    <!-- =====================================          COLLAPSE PARENT 1         ===================================== -->
            <div class="text-left mt-5 ml-5">
                <a data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample" class="linkCollapse text-dark">
                <b-icon icon="person-circle" variant="primary"></b-icon> My account
                </a>
            </div>
    <!-- =====================================          COLLAPSE PARENT 2         ===================================== -->
            <div class="text-left mt-5 ml-5">
                <a data-toggle="collapse" href="#collapseExample1" aria-expanded="true" aria-controls="collapseExample" class="linkCollapse text-dark">
                    <b-icon icon="geo-alt" variant="white" class='bg-warning rounded-circle'></b-icon> Shipping Adrress
                </a>
            </div>
    <!-- =====================================          COLLAPSE PARENT 3         ===================================== -->
            <div class="text-left mt-5 ml-5">
                <a data-toggle="collapse" href="#collapseExample2" aria-expanded="true" aria-controls="collapseExample" class="linkCollapse text-dark">
                    <b-icon icon="file-post-fill" variant="white" class="bg-danger rounded-circle"></b-icon> My order
                </a>
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
.profile {
    font-size: 20px;
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
</style>
