<template>
  <div class="register-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page register-page section-image" filter-color="black">
        <div class="content">
          <div class="container">
            <card type="signup">
              <h4 class="card-title text-center">
                Register for new store owner
              </h4>
              <form @submit.prevent="register">
                <div class="row">
                  <div class="col-lg-6 col-md-6 ml-auto">
                    <p class="card-title">Owner information</p>
                    <!-- User information register -->
                    <fg-input
                      v-model="user_name"
                      class="mb-2"
                      addon-left-icon="nc-icon nc-single-02"
                      placeholder="Login name"
                      @keyup.space="trimString()"
                      required
                    />
                    <fg-input
                      v-model="full_name"
                      class="mb-2"
                      addon-left-icon="nc-icon nc-single-02"
                      placeholder="Full name"
                      required
                    />
                    <!-- <validation-error :errors="apiValidationErrors.name" /> -->
                    <datepicker  :format="format" v-model="selectedDOB" class="mb-2" placeholder="DOB"></datepicker>
                    <fg-input
                      v-model="user_phonenumber"
                      class="mb-2"
                      addon-left-icon="nc-icon nc-mobile"
                      placeholder="Your phonenumber"
                      required
                    />
                    <validation-error
                      :errors="apiValidationErrors.phonenumber"
                    />
                    <fg-input
                      v-model="email"
                      class="mb-2 mt-1"
                      addon-left-icon="nc-icon nc-email-85"
                      placeholder="Email"
                    />
                    <validation-error :errors="apiValidationErrors.email" />
                    <fg-input
                      v-model="password"
                      class="mb-2 mt-1"
                      addon-left-icon="nc-icon nc-key-25"
                      placeholder="Password"
                      type="password"
                      required
                    />
                    <validation-error :errors="apiValidationErrors.password" />
                    <fg-input
                      v-model="password_confirmation"
                      class="mb-2 mt-1"
                      addon-left-icon="nc-icon nc-key-25"
                      placeholder="Password confirmation"
                      type="password"
                      required
                    />
                    <validation-error
                      :errors="apiValidationErrors.password_confirmation"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 ml-auto">
                    <p class="card-title">Your store information</p>
                    <fg-input
                      v-model="store_name"
                      class="mb-2"
                      addon-left-icon="nc-icon nc-single-02"
                      placeholder="Store's name"
                      required
                    />
                    <validation-error :errors="apiValidationErrors.name" />
                    <p class="card-title">Address</p>
                    <table>
                      <tr>
                        <th>Provinces</th>
                        <th>
                          <select
                           class="left"
                            @click="getProviceList"
                            @change="getDistrictList"
                            v-model="selectedProvince"
                          >
                            <option disabled>Provinces</option>
                            <option
                              v-for="province in provinceList"
                              :key="province.code"
                              v-bind:value="province.code"
                            >
                              {{ province.name }}
                            </option>
                          </select>
                        </th>
                      </tr>
                      <tr>
                        <th>Districts</th>
                        <th>
                          <select
                          class="left"
                            @change="getWardsList"
                            v-model="selectedDistrict"
                          >
                            <option disabled>Districts</option>
                            <option
                              v-for="district in districtsList"
                              :key="district.code"
                              v-bind:value="district.code"
                            >
                              {{ district.name }}
                            </option>
                          </select>
                        </th>
                      </tr>
                      <tr>
                        <th>Wards</th>
                        <th>
                          <select class="left" v-model="selectedWards">
                            <option disabled>Wards</option>
                            <option
                              v-for="ward in wardsList"
                              :key="ward.code"
                              v-bind:value="ward.code"
                            >
                              {{ ward.name }}
                            </option>
                          </select>
                        </th>
                      </tr>
                      <tr>
                        <th></th>
                      </tr>
                    </table>
                    <fg-input
                      v-model="password_confirmation"
                      class="mb-2 mt-1"
                      addon-left-icon="nc-icon nc-key-25"
                      placeholder="specific address"
                      required
                    />
                    <validation-error :errors="apiValidationErrors.Address" />
                    <!-- drop down -->
                    <!-- <el-select
                      multiple
                      collapse-tags
                      v-model="selects.multiple"
                      placeholder="Kind of food"
                    >
                      <el-option
                        v-for="option in selects.foodCategories"
                        class="select-primary"
                        :value="option.value"
                        :label="option.label"
                        :key="option.label"
                      >
                      </el-option>
                    </el-select> -->

                    <!-- Upload image -->
                    <!-- <p class="mb-2 mt-1">Store's logo</p>
                    <input type="file" @change="onFileSelected" />
                    <div id="preview">
                      <img v-if="url" :src="url" />
                    </div>
                     -->
                    <p-checkbox class="text-left" v-model="boolean">
                      I agree to the
                      <a href="#something">terms and conditions</a>.
                    </p-checkbox>

                    <p-button
                      native-type="register"
                      slot="footer"
                      type="info"
                      round
                      >Register</p-button
                    >
                  </div>
                </div>
              </form>
            </card>
          </div>
        </div>
        <!-- <app-footer></app-footer> -->
        <div
          class="full-page-background"
          style="
            background-image: url(/static/img/background/jan-sendereks.jpg);
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import AppNavbar from "./Layout/AppNavbar";
import AppFooter from "./Layout/AppFooter";
import {
  Card,
  Checkbox,
  Button,
  InfoSection,
} from "src/components/UIComponents";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
import { Select, Option } from "element-ui";
import axios from "axios";
import { REGISTER_URL } from "../../../../../src/constants/api.js";
import Datepicker from "vuejs-datepicker";
export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
    InfoSection,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    ValidationError,
    [Select.name]: Select,
    [Option.name]: Option,
    Datepicker,
  },
  data() {
    return {
      user_name: null,
      full_name: null,
      user_age: null,
      user_phonenumber: null,
      email: null,
      password: null,
      password_confirmation: null,
      store_name: null,
      store_address: null,
      boolean: false,
      store_logo: null,
      url: null,
      selects: {
        foodCategories: [
          { value: "Category 1", label: "Category 1" },
          { value: "Category 2", label: "Category 2" },
          { value: "Category 3", label: "Category 3" },
          { value: "Category 4", label: "Category 4" },
        ],
      },
      isRegisted: false,
      provinceList: null,
      districtsList: null,
      wardsList: null,
      selectedProvince: "Provinces",
      selectedDistrict: "Districts",
      selectedWards: "Wards",
      selectedDOB: null,
      format: "dd/MM/yyyy"
    };
  },
  created(){
    this.getProviceList();
  },
  methods: {
    // onFileSelected(event) {
    //   this.store_logo = event.srcElement.files[0];
    //   this.url = URL.createObjectURL(this.store_logo);
    // },

    trimString() {
      this.user_name = this.user_name.trim();
    },
    getSelectedDOB(){
      console.log("====" , this.sele);
    },
    async getProviceList() {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/p/"
        );
        this.provinceList = response.data;
        console.log(this.provinceList)
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "Provinces open api is not response",
        });
        return;
      }
    },
    async getDistrictList() {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/d/"
        );
        const allProvince = response.data;
        this.districtsList = allProvince.filter(
          (allProvince) => allProvince.province_code === this.selectedProvince
        );
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "Provinces open api is not response",
        });
        return;
      }
    },
    async getWardsList() {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/w/"
        );
        const allWards = response.data;
        this.wardsList = allWards.filter(
          (allWards) => allWards.district_code === this.selectedDistrict
        );
        console.log(this.wardsList);
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "Provinces open api is not response",
        });
        return;
      }
    },
    async register() {
      const dd = this.selectedDOB.getDate();
      const mm = this.selectedDOB.getMonth() + 1;
      const yy = this.selectedDOB.getFullYear();
      const d = yy + "/" + dd + "/"  + mm
      console.log(" date " ,d)
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.email.match(mailformat)) {
        console.log("vào check");
        await this.$notify({
          type: "danger",
          message: "Your mail address is not valid",
        });
        return;
      }
      if (!this.boolean) {
        await this.$notify({
          type: "danger",
          message: "You need to agree with our terms and conditions.",
        });
        return;
      }
      if (this.password !== this.password_confirmation) {
        await this.$notify({
          type: "danger",
          message:
            "Your cofirm password is not match with your password. Please check again",
        });
        return;
      }
      try {
        console.log("vào try");
        if (this.user_age == null) {
          this.user_age = "20";
        }
        await axios.post(REGISTER_URL, {
          full_name: this.full_name,
          email: this.email,
          phone_number: this.user_phonenumber,
          role_id: "2",
          user_name: this.user_name,
          user_password: this.password,
          dob: d,
        });
        this.$router.push("registerSuccessfully");
      } catch (error) {
        // console.log("looxi owr day",error.response.data.meta.message);
        await this.$notify({
          type: "danger",
          message: error.response.data.meta.message,
        });
        return;
      }
    },

  
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      document.body.classList.remove("off-canvas-sidebar");
    },
  },
  beforeDestroy() {
    this.closeMenu();
  },
};
</script>
<style scope>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 50%;
  max-height: 500px;
}
.left {
  width: 100%;
      border-color: #c6d0d9
}
table{
  width: 100%;
}
.vdp-datepicker *{
  width: 100%;
  border-color: #c6d0d9
}
.left,
input {
  padding: 0.5em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}

</style>