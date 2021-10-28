<template>
  <div class="user">
    <div class="photo avatar-image" :style="{'background-image': `url('${profileImage}')`,}" />
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click="toggleMenu" href="#">
         <span>
           {{ title }}  
           <b class="caret"></b>
        </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav nav-menu" v-show="!isClosed">
            <li>
              <a href="#" @click="goToProfile">
                <span class="sidebar-mini-icon">Mp</span>
                <span class="sidebar-normal">My Profile</span>
              </a>
            </li>
            <li>
              <a href="#" @click="logout">
                <span class="sidebar-mini-icon">L</span>
                <span class="sidebar-normal">Logout</span>
              </a>
            </li>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import axios from "axios";

  export default {
    components: {
      CollapseTransition
    },
    computed: {
      profileImage() {
        const role = localStorage.roleID;
        switch(role){
          //admin
      case "5": {
        return this.avatar ? this.avatar : "/img/admin.jpg"
        
      }

      case "4":{
        return this.avatar ? this.avatar : "/img/mod.jpg"
      }

      //owner
      case "2":{
        return this.avatar ? this.avatar : "/img/restaurant.jpg";
      }
    }
      },
    },
    data() {
      return {
        isClosed: true,
        avatar: null,
        title: "",
        token: localStorage.token || "",
      }     
    },

    async created() {
      this.getProfile();
    },
    methods: {
      toggleMenu() {
        this.isClosed = !this.isClosed
      },
      logout() {
        this.$store.dispatch("logout");
      },
      goToProfile() {
        this.$router.push({name: "User Profile"});
      },
       getProfile() {
       axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      axios
        .get(`http://13.229.222.26:8000/api/v1/users/get_user/?user_id=${localStorage.uid}`)
        .then((res) => {          
          this.title = res.data.data.name;
        })
        .catch((err) => {
          console.log("error" + err);
        });
    },
    }
  }
</script>
<style scoped>
  .nav.nav-menu {
    margin-top: 0;
  }
</style>
