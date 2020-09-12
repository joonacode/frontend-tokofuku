<template>
<div class="container">
    <div class="row">
        <div class="col-12 mb-3">
            <h1 class="text-left font-weight-bold">My bag</h1>
        </div>
        <div class="col-8 row">
            <CheckProductOnChart />
            <CardChart />
            <CardChart />
            <div class="col-12">
            </div>
        </div>
        <div class="col-4">
                <b-card
                header="Shopping Summary"
                align="left"
                class="shadow-sm"
                >
                <div class="row">
                    <b-card-text class="col-6 text-left">Total Price</b-card-text>
                    <b-card-text class="col-6 text-right font-weight-bold">$ 20.0</b-card-text>
                    <div class="col-12 text-center mt-4">
                        <b-button pill block variant="success">Buy</b-button>
                    </div>
                </div>
                </b-card>
        </div>
    </div>
</div>
</template>

<script>
import CardChart from '../components/atoms/CardChart'
import CheckProductOnChart from '../components/atoms/CheckProductOnChart'

export default {
  components: {
    CardChart,
    CheckProductOnChart
  }
}
</script>

<style>

</style>
