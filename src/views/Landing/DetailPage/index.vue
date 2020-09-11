<template>
  <div>
    <MainNavbar />
    <DetailProduct />
    <MainFooter />
  </div>
</template>

<script>
import DetailProduct from '@/components/organisms/DetailProduct'
import MainNavbar from '@/components/layout/MainNavbar'
import MainFooter from '@/components/layout/MainFooter'

export default {
  components: { MainNavbar, DetailProduct, MainFooter }
}
</script>
