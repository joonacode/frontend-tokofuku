<template>
  <div class="container-fluid">
    <div class="main-sidebar">
      <MainSidebar class="content" />
    </div>
    <div class="main-content">
      <!-- Inventory -->
      <div class="col-md-11 p-0 form inventory">
        <div class="title">Inventory</div>
        <div class="form-input">
          <div>Name of goods</div>
          <input type="text" />
        </div>
      </div>
      <!-- Items detail -->
      <div class="col-md-11 p-0 form item-detail">
        <div class="title">Item details</div>
        <div class="form-input">
          <div>Unit price</div>
          <input type="text" />
        </div>
        <div class="form-input">
          <div>Stock</div>
          <input type="text" placeholder="buah" />
        </div>
      </div>
      <!-- Photo of goods -->
      <div class="col-md-11 p-0 form photo">
        <div class="title">Photo of goods</div>
        <div class="main-photo">
          <span>
            <img src="../../assets/box 1.png" />
          </span>
          <span>
            <img src="../../assets/box 1.png" />
          </span>
          <span>
            <img src="../../assets/box 1.png" />
          </span>
          <span>
            <img src="../../assets/box 1.png" />
          </span>
          <span>
            <img src="../../assets/box 1.png" />
          </span>
          <div class="line"></div>
          <label class="custom-file-upload">
            <input type="file" />
            Upload foto
          </label>
        </div>
      </div>
      <!-- Description -->
      <div class="col-md-11 p-0 form description">
        <div class="title">Description</div>
        <div class="main-description">
          <div class="navbar-description">
            <i class="fa fa-text-height"></i>
            <i class="fa fa-bold"></i>
            <i class="fa fa-italic"></i>
            <i class="fa fa-list"></i>
            <i class="fa fa-list-ol"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from '../layout/MainSidebar'
export default {
  name: 'SellingProduct',
  components: {
    MainSidebar
  }
}
</script>

<style scoped>
.container-fluid {
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
}

.container-fluid .main-sidebar {
  /* border: 1px solid black; */
  flex: 1;
}

.main-sidebar .content {
  /* border: 1px solid black; */
  position: relative;
  top: -30px;
  left: -48px;
}

.container-fluid .main-content {
  /* border: 1px solid black; */
  flex: 2.1;
  overflow-y: scroll;

  background: #e9e8e8;
}

.main-content .form {
  /* border: 1px solid black; */
  height: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 35px;
  background: #ffffff;
  border-radius: 4px;
}

/* ==================================================================================== */
/* Form Inventory*/
.main-content .form.inventory {
  /* background: blue; */

  height: 234px;
}
.main-content .form.inventory .title {
  border-bottom: 1px solid #d4d4d4;
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 22px;
}

.main-content .form.inventory .form-input {
  /* border: 1px solid black; */
  margin-top: 30px;
}

.main-content .form.inventory .form-input div {
  /* border: 1px solid black; */
  text-align: left;
  padding-left: 20px;
  color: #9b9b9b;

  font-weight: 500;
  font-size: 16px;
}

.main-content .form.inventory .form-input input {
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  border-radius: 4px;
  position: relative;
  left: -225px;

  margin-top: 20px;
  width: 40%;
  height: 45px;
}

/* ==================================================================================== */
/* Form Items Details*/
.main-content .form.item-detail {
  height: 432px;
}
.main-content .form.item-detail .title {
  border-bottom: 1px solid #d4d4d4;
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 22px;
}

.main-content .form.item-detail .form-input {
  /* border: 1px solid black; */
  margin-top: 30px;
}

.main-content .form.item-detail .form-input div {
  /* border: 1px solid black; */
  text-align: left;
  padding-left: 20px;
  color: #9b9b9b;

  font-weight: 500;
  font-size: 16px;
}

.main-content .form.item-detail .form-input input {
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  border-radius: 4px;
  position: relative;
  left: -225px;
  text-align: right;
  padding-right: 10px;
  color: #9b9b9b;

  margin-top: 14px;
  width: 40%;
  height: 45px;
}

/* ==================================================================================== */
/* Form Photo*/
.main-content .form.photo {
  height: 529px;
}

.main-content .form.photo .title {
  border-bottom: 1px solid #d4d4d4;
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 22px;
}

.main-content .form.photo .main-photo {
  /* border: 1px solid black; */
  width: 780px;
  height: 375px;
  margin: 20px auto;

  border: 1px dashed #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
}

.main-content .form.photo .main-photo span {
  /* border: 1px solid black; */
  display: inline-block;
  background: #d4d4d4;
  width: 120px;
  height: 120px;
  margin: 80px 10px 10px 20px;
}

.main-content .form.photo .main-photo img {
  width: 40px;
  height: 40px;
  margin: 40px auto;
}
.main-content .form.photo .main-photo span:hover {
  width: 140px;
  height: 140px;
}

.main-content .form.photo .main-photo div {
  border-bottom: 1px solid #d4d4d4;
  width: 92%;
  margin: 60px auto;
}

input[type='file'] {
  display: none;
}

.main-content .form.photo .main-photo .custom-file-upload {
  border: 1px solid #9b9b9b;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  width: 180px;

  border-radius: 24px;
}

/* ==================================================================================== */
/* Form Description*/
.main-content .form.description {
  height: 529px;
}

.form.description .title {
  border-bottom: 1px solid #d4d4d4;
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 22px;
}

.form.description .main-description {
  width: 760px;
  height: 316px;
  margin: 30px auto;

  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
}

.form.description .main-description .navbar-description {
  width: 760px;
  height: 45px;

  border-bottom: 1px solid #d4d4d4;
}

.form.description .main-description .navbar-description .fa {
  position: relative;
  left: -250px;
  top: 10px;
  margin-right: 25px;
  cursor: pointer;
}
</style>
