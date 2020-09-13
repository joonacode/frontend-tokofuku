<template>
<div>
    <b-col cols="12">
        <h1 class="text-left mt-5 order">My Order</h1>
    </b-col>
    <b-col cols="12" class="border-bottom">
        <div>
            <b-nav>
                <b-nav-item href="#1" class="link">All Items</b-nav-item>
                <b-nav-item href="#2" class="link">Get paid</b-nav-item>
                <b-nav-item href="#2" class="link">Processed</b-nav-item>
                <b-nav-item href="#2" class="link">Sent</b-nav-item>
                <b-nav-item href="#2" class="link">Completed</b-nav-item>
                <b-nav-item href="#2" class="link">Order Cancel</b-nav-item>
            </b-nav>
        </div>
    </b-col>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control rounded-pill mt-3 ml-3" type="search" placeholder="Search" aria-label="Search">
    </form>
    <img src="../../assets/cart.svg" class="image">
</div>
</template>

<script>
export default {

}
</script>

<style>
.image {
    margin-top: 6rem;
}
</style>
