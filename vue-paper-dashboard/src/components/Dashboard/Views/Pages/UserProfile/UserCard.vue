<template>
  <div class="card card-user">
    <div class="image">
      <img :src="url_cover_img" alt="..." />
    </div>
    <div class="card-body">
      <div class="author">      
        <p class="description">
          <a href="#">
          <img class="avatar border-gray" :src="url_avatar" alt="..." />
        </a>          
        </p>
         <!-- Avatar img -->
        <!-- <div class="text-center">
          <input type="file" @change="onFileSelected" class="btn-open-img" />
          <button
            class="btn btn-info btn_change_ava"
            type="file"
            @click.prevent="openImageDialog"
          >
            Avatar
          </button>
        </div> -->
      </div>
      <p class="description text-center">
        <a href="#">
          <h5 class="title">{{ user.name }}</h5>
        </a>
        {{ user.full_name }} <br />
        {{ user.phone_number }} <br />
        {{ user.email }} <br />
      </p>
    </div>
    <div class="card-footer">
      <hr />
      <div class="button-container"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      url_cover_img: "/static/img/background/damir-bosnjak.jpg",
      url_avatar: "/static/img/placeholder.jpg",
      user: { ...this.user },
      user_name: this.user_name,
    };
  },

created: function(){
    const role = localStorage.roleID;
    switch(role){
      case "5": {
        this.url_avatar= "/static/img/admin.jpg"
        break;
      }
      case "4":{
        this.url_avatar = "/static/img/mod.jpg"
        break;
      }
      case "2":{
        this.url_avatar = "/static/img/restaurant.jpg"
        break;
      }
    }
    console.log("role cuar dash" , this.currentRole)
  },

  methods: {
    openImageDialog() {
      document.querySelector(".btn-open-img").click();
    },

    onFileSelected(event) {
      this.avatar_user = event.srcElement.files[0];
      this.url_avatar = URL.createObjectURL(this.avatar_user);
      document.querySelector(".fake-img").classList.add("hide-fake-img");
    },
  },
};
</script>
<style>
.btn_change_ava{
  margin-top: -20px !important;
}
</style>
