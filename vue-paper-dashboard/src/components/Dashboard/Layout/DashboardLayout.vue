<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
      <user-menu></user-menu>
      <template slot-scope="props" slot="links">
        <div class="administrator_nav"
          v-if="currentRole === 'admin'"
        >
          <sidebar-item
            class="example"
            :link="{ name: 'Administrator', icon: 'nc-icon nc-settings-gear-65' }"
          >
          <sidebar-item
            :link="{
              name: 'Maintaining',
              icon: 'nc-icon nc-bank',
              path: '/administrator/maintaining',
            }"
          >
          </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Moderator List',
                path: '/administrator/moderatorlist',
              }"
            />
            <sidebar-item
              :link="{
                name: 'Create new Moderator',
                path: '/administrator/createnewmoderator',
              }"
            />
          </sidebar-item>
        </div>
        <div class="moderator_nav"
        v-if="currentRole === 'moderator' || currentRole === 'admin'">
          <sidebar-item
            
            class="example"
            :link="{ name: 'Moderator', icon: 'nc-icon nc-single-copy-04' }"
          >
          <sidebar-item
            :link="{
              name: 'Restaurance request list',
              icon: 'nc-icon nc-bank',
              path: '/moderator/newrequest',
            }"
          >
          </sidebar-item>

          <sidebar-item
            :link="{
              name: 'Report list',
              icon: 'nc-icon nc-bank',
              path: '/moderator/reportlist',
            }"
          >
          </sidebar-item>
          </sidebar-item>
          
        </div>
        <div class="restaurantOwer_nav"
        v-if="currentRole ==='owner'" >
          <sidebar-item
            class="example"
            :link="{ name: 'Your restaurent', icon: 'nc-icon nc-shop' }"
          >
          <sidebar-item
            :link="{
              name: 'List product',
              icon: 'nc-icon nc-shop',
              path: '/myrestaurant/listproduct',
            }"
          >          
          </sidebar-item>
           <sidebar-item
            :link="{
              name: 'Add product',
              icon: 'nc-icon nc-shop',
              path: '/myrestaurant/addproduct',
            }"
          >  
                  
          </sidebar-item>
            <sidebar-item
              :link="{
                name: 'Revenue',
                path: '/myrestaurant/revenue',
              }"
            />
            <sidebar-item
              :link="{
                name: 'List Cashiers',
                path: '/myrestaurant/listcashiers',
              }"
            />
             <sidebar-item
            :link="{
              name: 'Create account cashier',
              icon: 'nc-icon nc-shop',
              path: '/myrestaurant/createnewaccountcashier',
            }"
          >          
          </sidebar-item>
          </sidebar-item>
        </div>


        <!-- <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-bank',
            path: '/admin/overview',
          }"
        >
        </sidebar-item>
        <sidebar-item
          opened
          class="example"
          :link="{ name: 'Examples (API)', icon: 'fab fa-vuejs fa-2x' }"
        > -->
          <!-- <sidebar-item
            :link="{
              name: 'User Profile',
              path: '/examples/user-profile',
            }"
          /> -->
          <!-- <sidebar-item
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users',
            }"
          />
        </sidebar-item> -->
        <!-- <sidebar-item
          :link="{
            name: 'Typography',
            path: '/administrator/typography',
            icon: 'nc-icon nc-caps-small',
          }"
        /> -->

        <!-- <sidebar-item
          :link="{
            name: 'Table List',
            icon: 'nc-icon nc-single-copy-04',
            path: '/table-list/regular',
          }"
        >
        </sidebar-item> -->
        <sidebar-item
         v-if="currentRole === 'admin'"
          :link="{
            name: 'Notifications',
            path: '/administrator/pushnotice',
            icon: 'nc-icon nc-bell-55',
          }"
        >
        </sidebar-item>
        <!-- <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'nc-icon nc-planet',
            path: '/administrator/icons',
          }"
        >
        </sidebar-item> -->
        <!-- <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'nc-icon nc-pin-3',
            path: '/maps/google',
          }"
        >
        </sidebar-item> -->
        <!-- <sidebar-item
          :link="{
            name: 'Upgrade to PRO',
            icon: 'fa fa-download',
            target: '_blank',
            isRoute: true,
            path: 'https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel',
          }"
          class="btn-sm btn-danger"
        ></sidebar-item> -->
      </template>
    </side-bar>
    <sidebar-share
      :background-color.sync="backgroundColor"
      :active-color.sync="activeColor"
    >
    </sidebar-share>

    <div class="main-panel">
      <!-- <top-navbar></top-navbar> -->

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from "src/components/UIComponents/SidebarPlugin/UserMenu.vue";
import SidebarItem from "../../UIComponents/SidebarPlugin/SidebarItem.vue";
import SidebarShare from "./SidebarSharePlugin";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    UserMenu,
    SidebarItem,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "black",
      activeColor: "success",
      currentRole: null,
    };
  },

  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
  created: function(){
    const role = localStorage.roleID;
    switch(role){
      case "5": {
        this.currentRole = "admin";
        break;
      }
      case "4":{
        this.currentRole = "moderator"
        break;
      }
      case "2":{
        this.currentRole = "owner"
        break;
      }
    }
    console.log("role cuar dash" , this.currentRole)
  }
};
</script>
