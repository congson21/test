<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="header-body text-center" style="margin-bottom: 15px">
              <div class="row justify-content-center">
                <div class="text-white">
                  <div>
                    <h1><b>Welcome to Scan&Go system</b></h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <h3 slot="header" class="header text-center">
                    <strong>Login</strong>
                  </h3>

                  <fg-input
                    v-model="email"
                    addon-left-icon="nc-icon nc-single-02"
                    placeholder="Email"
                  />
                  <validation-error :errors="apiValidationErrors.email" />
                  <fg-input
                    v-model="password"
                    addon-left-icon="nc-icon nc-key-25"
                    placeholder="Password"
                    type="password"
                  />
                  <validation-error :errors="apiValidationErrors.password" />
                  <div slot="footer">
                    <p-button
                      native-type="submit"
                      slot="footer"
                      type="warning"
                      round
                      block
                      class="mb-3"
                      >Login</p-button
                    >
                  </div>
                  <br />
                  <div class="pull-left">
                    <h6>
                      <a href="/password/reset" class="link footer-link"
                        >Forgot Password?</a
                      >
                    </h6>
                  </div>
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div
          class="full-page-background"
          style="background-image: url(/static/img/background/background-2.jpg)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button } from "src/components/UIComponents";
import AppNavbar from "./Layout/AppNavbar";
import AppFooter from "./Layout/AppFooter";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
import axios from "axios";
import { LOGIN_URL } from "../../../../../src/constants/api.js"; 

export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
    [Button.name]: Button,
    ValidationError,
  },
  data() {
    return {
      email: "",
      password: "",
      token: "",
    };
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      document.body.classList.remove("off-canvas-sidebar");
    },
    async login() {
      try {
        const response = await axios.post(
          LOGIN_URL,
          {
            user_name: this.email,
            password: this.password,
            device_type: "0",
          }

        );
        localStorage.token = response.data.data.access_token; 
        localStorage.roleID = response.data.data.role_id;
        localStorage.uid = response.data.data.user_id;
        console.log(response.data.data);
        this.$router.push("/user/user-profile");
        // this.$router.push({ path: "/user/user-profile", params: { user_id: response.data.data.user_id } })
      } catch (error) {
        this.$notify({
          message: "Login failed! Try again later!",
          type: "danger",
        });
      }
    },
  },
  beforeDestroy() {
    this.closeMenu();
  },
};
</script>
<style>
</style>
