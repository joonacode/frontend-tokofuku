<template>
<b-container class=" bg-white rounded mt-5 main">
    <b-row class="container">
        <b-col cols="12">
            <h1 class="text-left mt-5 order">My profile store</h1>
            <h6 class="text-muted text-left">Manage your profile information</h6>
            <div class="border-bottom mt-4"></div>
        </b-col>
        <b-col cols="12">
            <b-row class="mt-3">
                <b-col cols="9 text-left">
                    <form>
                        <div class="form-group row mt-4">
                            <label for="colFormLabelLg" class="col-sm-3 col-form-label-lg">Store name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control form-control-lg" id="inputPassword">
                            </div>
                        </div>
                        <div class="form-group row mt-4">
                            <label for="colFormLabelLg" class="col-sm-3 col-form-label-lg">Email</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control form-control-lg" id="inputPassword">
                            </div>
                        </div>
                        <div class="form-group row mt-4">
                            <label for="colFormLabelLg" class="col-sm-3 col-form-label-lg">Phone number</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control form-control-lg" id="inputPassword">
                            </div>
                        </div>
                        <div class="form-group row mt-4">
                            <label for="colFormLabelLg" class="col-sm-3 col-form-label-lg">Store description</label>
                            <div class="col-sm-9">
                                <textarea type="text" class="form-control form-control-lg" id="inputPassword"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-lg btn-success pl-5 pr-5 pt-3 pb-3 ml-5 mr-auto mt-5 rounded-pill">Save</button>
                    </form>
                </b-col>
                <b-col cols="3">
                    <div class="border-left">
                        <b-img src="https://pbs.twimg.com/profile_images/1300740232485068800/KpNhyts7_400x400.jpg" rounded="circle" alt="Circle image" class="profile-photo mt-4 ml-5"></b-img>
                        <input type="file" class="form-control-file mt-4 ml-4" id="exampleFormControlFile1">
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
