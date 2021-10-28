edit product

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title"><span v-if="!view">Edit</span> Product Details</h4>
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-4" >
            <img
              src="/static/img/mike.jpg"
              alt="W3Schools.com"
              width="100"
              height="132"
            />
          </div>

          <div class="col-md-7">
            <div class="row">
              <div class="col-md-6">
                <fg-input
                  :disabled="view"
                  type="text"
                  label="Name"
                  placeholder="name"
                  v-model="product.productName"
                >
                </fg-input>
              </div>
              <div class="col-md-6">
                <fg-input
                  :disabled="view"
                  type="Text"
                  label="Price"
                  placeholder="price"
                  v-model="product.productPrice"
                >
                </fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label for="category">Category</label>
                <select :disabled="view" id="category" class="form-control">
                  <option
                    v-for="item in category"
                    v-bind:key="item"
                    :selected="item == 'Drinks'"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="status">Status</label>
                <select :disabled="view" id="status" class="form-control">
                  <option
                    v-for="item in status"
                    v-bind:key="item"
                    :selected="item == 'Available'"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <br />
            <div class="text-center">
              <p-button v-on:click="EnableEdit" v-if="view" type="info"
                >Edit Profile</p-button
              >
              <button
                v-if="!view"
                type="submit"
                class="btn btn-info btn-fill btn-wd"
                @click.prevent="updateProuct"
              >
                Update Product
              </button>
              <p-button v-if="view" v-on:click="deleteUser" type="danger"
                >Delete Product</p-button
              >
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      product: {
        productName: "Gà rán",
        productPrice: "50.000 VNĐ",
        productCategory: "Food",
        productStatus: "Available",
      },
      category: ["Food", "Drink"],
      status: ["Is out of stock", "Available"],
      view: true,
    };
  },
  methods: {
    updateProduct() {
      alert("Your data: " + JSON.stringify(this.product));
      this.$router.push("listproduct");
    },
    EnableEdit() {
      this.view = false;
    },
    deleteProduct() {
      this.$router.push("listproduct");
    },
  },
};
</script>
<style>
</style>
