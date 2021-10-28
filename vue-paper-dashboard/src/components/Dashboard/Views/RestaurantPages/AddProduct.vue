add product

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Add Product</h4>
    </div>

    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-sm-5">
            <div id="preview" class="text-center img-container-add-product">
              <div class="fake-img"></div>
              <img
                v-if="url"
                :src="url"
                width="250"
                height="200"
                class="img-add-product"
              />
            </div>
            <div class="text-center">
              <input
                type="file"
                @change="onFileSelected"
                class="btn-open-img"
              />
              <button
                class="btn btn-info"
                type="file"
                @click.prevent="openImageDialog"
              >
                Choose Image
              </button>
            </div>
          </div>

          <div class="col-sm-7">
            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="Product's name"
                  label="Name"
                  placeholder="Enter name"
                  v-model="product.name"
                >
                </fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="text"
                  label="Price"
                  placeholder="Enter price"
                  v-model="product.price"
                >
                </fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-11">
                <label for="category">Category</label>
                <select id="category" class="form-control">
                  <option
                    v-for="item in category"
                    v-bind:key="item"
                    :selected="item == 'Drinks'"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>

            <br />

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-info btn-fill btn-wd"
                @click.prevent="createNewProduct"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import Vue from "vue";
import excel from "vue-excel-export";

Vue.use(excel);
export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        // category: "",
      },
      category: ["Food", "Drink"],
      url: null,
    };
  },
  methods: {
    openImageDialog() {
      document.querySelector(".btn-open-img").click();
    },
    onFileSelected(event) {
      this.store_logo = event.srcElement.files[0];
      this.url = URL.createObjectURL(this.store_logo);
      document.querySelector(".fake-img").classList.add("hide-fake-img");
    },
    createNewAccount() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 50%;
  max-height: 500px;
}
.btn-open-img {
  display: none;
}
.fake-img {
  width: 250px;
  height: 200px;
  border: 0.5px ridge rgb(219, 216, 216);
}

.img-add-product {
  object-fit: contain;
}

.img-container-add-product {
  width: 100%;
  height: 228px;
}

.hide-fake-img {
  display: none;
}

.input-form {
  border: 1px solid black;
}
</style>
