<template>
<div class="container">
    <div class="row">
        <div class="col-12 mb-3">
            <h1 class="text-left font-weight-bold">My bag</h1>
        </div>
        <div class="col-8 row">
            <div class="col-12 shadow-sm rounded mx-auto">
                <b-form-checkbox size="lg" class="font-weight-bold text-left ml-2"><span class="ml-4">Select all items <span class="text-muted">(2 items selected)</span></span></b-form-checkbox>
            </div>
            <div class="col-12 mt-3 shadow-sm">
                <div class="clearfix row">
                    <b-form-checkbox size="lg" class="col-1 mt-4 ml-3"></b-form-checkbox>
                    <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image" class="col-2"></b-img>
                    <div class="col-4">
                    <h4 class="text-left">Men's Formal Suit</h4>
                    <p class="text-left text-muted">Zalora Cloth</p>
                    </div>
                    <div class="col-3 row mt-3 text-center">
                    <div class="col-4">
                    <b-button pill class="bg-grey shadow-sm">-</b-button>
                    </div>
                    <p class="col-4 mt-1"> 1 </p>
                    <div class="col-4">
                    <b-button pill class="bg-white text-dark shadow-sm"> + </b-button>
                    </div>
                    </div>
                    <h5 class="col-2 mt-4 text-right">$ 20.0</h5>
                </div>
            </div>
            <div class="col-12 mt-3 shadow-sm">
                <div class="clearfix row">
                    <b-form-checkbox size="lg" class="col-1 mt-4 ml-3"></b-form-checkbox>
                    <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image" class="col-2"></b-img>
                    <div class="col-4">
                    <h4 class="text-left">Men's Formal Suit</h4>
                    <p class="text-left text-muted">Zalora Cloth</p>
                    </div>
                    <div class="col-3 row mt-3 text-center">
                    <div class="col-4">
                    <b-button pill class="bg-grey shadow-sm">-</b-button>
                    </div>
                    <p class="col-4 mt-1"> 1 </p>
                    <div class="col-4">
                    <b-button pill class="bg-white text-dark shadow-sm"> + </b-button>
                    </div>
                    </div>
                    <h5 class="col-2 mt-4 text-right">$ 20.0</h5>
                </div>
            </div>
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
export default {

}
</script>

<style>

</style>
