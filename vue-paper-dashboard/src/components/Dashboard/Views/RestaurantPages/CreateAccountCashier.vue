<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Create new account cashier</h4>
    </div>

    <div class="card-body">
      <form @submit.prevent="createNewCashier">
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
                  type="text"
                  label="Username"
                  placeholder="Enter username"
                  v-model="username"
                >
                </fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="text"
                  label="Full name"
                  placeholder="Enter name"
                  v-model="fullname"
                >
                </fg-input>
              </div>
            </div>

            <!-- <div class="row">
              <div class="col-sm-11">
                <label for="gender">Gender</label>
                <select id="gender" class="form-control">
                  <option
                    v-for="item in gender"
                    v-bind:key="item"
                    :selected="item == 'Male'"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div> -->
            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="text"
                  label="Email"
                  placeholder="Enter email"
                  v-model="email"
                >
                </fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="text"
                  label="Phone"
                  placeholder="Enter phone"
                  v-model="phonenumber"
                >
                </fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11">
                <datepicker
                  lable="DOB"
                  :format="format"
                  v-model="selectedDOB"
                  class="mb-2"
                  placeholder="DOB"
                ></datepicker>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11">
                <fg-input
                  type="text"
                  label="Password"
                  placeholder="Enter password"
                  v-model="password"
                >
                </fg-input>
              </div>
            </div>

            <br />

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-info btn-fill btn-wd"
                @click="createNewCashier"
              >
                Create
              </button>
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
import excel from "vue-excel-export";

import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import { CREATE_EMPLOYEE } from "../../../../../src/constants/api.js";
import axios from "axios";
Vue.use(excel);
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      url : null,
      username: null,
      fullname: null,
      email: null,
      phonenumber: null,
      password: null,
       format: "dd/MM/yyyy",
       selectedDOB: null,
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
    async createNewCashier() {
       const dd = this.selectedDOB.getDate();
      const mm = this.selectedDOB.getMonth() + 1;
      const yy = this.selectedDOB.getFullYear();
      const d = yy + "/" + dd + "/"  + mm
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.email.match(mailformat)) {
        await this.$notify({
          type: "danger",
          message: "Entered mail address is not valid",
        });
        return;
      }
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
        await axios.post(CREATE_EMPLOYEE, {
          full_name: this.fullname,
          email: this.email,
          phone_number: this.phonenumber,
          role_id: "3",
          user_name: this.username,
          user_password: this.password,
          dob: d,
        });
        this.$router.push("listCashiers");
      } catch (error) {
        // console.log("looxi owr day", error);
        await this.$notify({
          type: "danger",
          message: error.response.data.meta.message,
        });
        return;
      }
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
input {
  padding: 0.5em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}

</style>
