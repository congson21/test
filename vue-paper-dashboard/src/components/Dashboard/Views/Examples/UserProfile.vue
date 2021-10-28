<template>
  <div v-if="user" class="row">
    <div class="col-lg-7 col-md-7">
      <user-card :user="user" />
    </div>
    <div class="col-lg-5 col-md-5">
      <edit-profile-card :user="user" />
      <edit-password-card :user="user" />
    </div>
  </div>
</template>
<script>
import EditProfileCard from "./UserProfile/EditProfileCard.vue";
import UserCard from "../Pages/UserProfile/UserCard.vue";
import EditPasswordCard from "./UserProfile/EditPasswordCard.vue";
import { GET_USER } from "../../../../../src/constants/api.js";
import axios from "axios";

export default {
  props: ["user_name"],
  components: {
    EditProfileCard,
    UserCard,
    EditPasswordCard,
  },

  data: () => ({
    user:{},
    token: localStorage.token || "",
  }),

  created() {
    this.getProfile();
    // console.log(this.$route.params.user_id);
    // console.log(this.$route);
    // console.log(localStorage.uid);
  },

  methods: {
    getProfile() {
       axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      axios
        .get(`http://13.229.222.26:8000/api/v1/users/get_user/?user_id=${localStorage.uid}`)
        .then((res) => {
          // console.log(res);
          this.user = res.data.data;
        })
        .catch((err) => {
          console.log("error" + err);
        });
    },
  },
};
</script>

<style>
</style>
