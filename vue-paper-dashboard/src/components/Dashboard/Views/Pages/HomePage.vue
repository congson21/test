<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
      <user-menu></user-menu>
      <template slot-scope="" slot="links">
        <sidebar-item
          :link="{
            name: 'Restaurant owner',
            path: '#',
          }"
        >
        </sidebar-item>
        <sidebar-item
          class="example"
          :link="{ name: 'Product', icon: 'fab fa-vuejs fa-2x' }"
        >
          <sidebar-item
            :link="{
              name: 'List of product',
              path: '#',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Add product',
              path: '#',
            }"
          />
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Revenue',
            path: '#',
            icon: 'nc-icon nc-caps-small',
          }"
        />
        <sidebar-item
          class="example"
          :link="{ name: 'Cahiers', icon: 'fab fa-vuejs fa-2x' }"
        >
          <sidebar-item
            :link="{
              name: 'Create account',
              path: '#',
            }"
          />
          <sidebar-item
            :link="{
              name: 'List of cashiers',
              path: '#',
            }"
          />
        </sidebar-item>
      </template>

<!-- Adminstrator -->

      <template slot-scope="" slot="links">
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <sidebar-item
          :link="{
            name: 'Adminstrator',
            path: '#',
          }"
        >
        </sidebar-item>
         <sidebar-item
          :link="{
            name: 'Maintaining',
            path: '#',
            icon: 'nc-icon nc-caps-small',
          }"
        />
        <sidebar-item
          class="example"
          :link="{ name: 'Moderator Management', icon: 'fab fa-vuejs fa-2x' }"
        >
        
          <sidebar-item
            :link="{
              name: 'Moderator list',
              path: '#',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Create new moderator',
              path: '#',
            }"
          />
        </sidebar-item>
      </template>

<!-- Moderator -->
<template slot-scope="" slot="links">
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <sidebar-item
          :link="{
            name: 'Moderator',
            path: '/admin/overview',
          }"
        >
        </sidebar-item>
         <sidebar-item
          :link="{
            name: 'Request List',
            path: '#',
            icon: 'nc-icon nc-caps-small',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Report List',
            path: '#',
            icon: 'nc-icon nc-caps-small',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Change Information',
            path: '#',
            icon: 'nc-icon nc-caps-small',
          }"
        />
        

      </template>

    </side-bar>
    <sidebar-share
      :background-color.sync="backgroundColor"
      :active-color.sync="activeColor"
    >
    </sidebar-share>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
    <drop-down
      icon="nc-icon nc-settings-gear-65"
      tag="li"
      position="right"
      direction="none"
      class="nav-item btn-rotate dropdown"
    >
      <a
        slot="title"
        slot-scope="{ isOpen }"
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        :aria-expanded="isOpen"
      >
        <i class="nc-icon nc-settings-gear-65"></i>
        <p>
          <span class="d-lg-none d-md-block">Profile</span>
        </p>
      </a>
      <a class="dropdown-item" href="#" @click="goToProfile">Profile</a>
      <a class="dropdown-item" @click="logout" href="#">Log out</a>
    </drop-down>
  </div>
</template>
<script>
import ValidationError from "src/components/UIComponents/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
import AppNavbar from "src/components/Dashboard/Views/Pages/Layout/AppNavbar";
import AppFooter from "src/components/Dashboard/Views/Pages/Layout/AppFooter";
export default {
  layout: "AuthLayout",
  mixins: [formMixin],
  components: {
    AppNavbar,
    AppFooter,
    ValidationError,
  },
  data() {
    return {
      form: {
        data: {
          type: "password-forgot",
          attributes: {
            email: "",
            redirect_url: process.env.VUE_APP_BASE_URL + "/password/email",
          },
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$isDemo) {
        await this.$notify({
          type: "danger",
          message: "Password reset is disabled in the demo.",
        });
        return;
      }
      try {
        await this.$store.dispatch("reset/forgotPassword", this.form.data);
        await this.$notify({
          type: "success",
          message: "An email with reset password link was sent.",
        });
        this.$refs["reset_password_form"].reset();
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "We can't find a user with that e-mail address.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>