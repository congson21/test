<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title"><span v-if="!view">Edit</span>
         Moderator Profile</h4>
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-12">
           <img src="/static/img/mike.jpg" alt="W3Schools.com" width="100" height="132">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="ID"
              :disabled="true"
              placeholder="id"
              v-model="user.id"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
            :disabled="view"
              type="text"
              label="User Name"
              placeholder="username"
              v-model="user.username"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
            :disabled="view"
              type="Moderator's name"
              label="name"
              placeholder="name"
              v-model="user.name"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
            :disabled="view"
              type="text"
              label="Email"
              placeholder="email"
              v-model="user.email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
            :disabled="view"
              type="text"
              label="Adress"
              placeholder="adress"
              v-model="user.adress"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
            :disabled="view"
              type="text"
              label="Phone number"
              placeholder="phone number"
              v-model="user.phonenumber"
            >
            </fg-input>
          </div>
        </div>
       
        <div class="text-center">
          <p-button v-on:click="EnableEdit" v-if="view" type="info">Edit Profile</p-button>
          <button
          v-if="!view"
            type="submit"
            class="btn btn-info btn-fill btn-wd"
            @click.prevent="updateProfile"
          >
            Update Profile
          </button>
          <p-button v-if="view" v-on:click="deleteUser" type="danger">Delete user</p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: "01",
        username: "Thaovphe130635",
        name: "Vũ Phương Thảo",
        email: "Thaovphe130635@fpt.edu.vn",
        address: "Sơn Teei city",
        postalCode: "",
        phonenumber: "0912345678",
      },
      view : true,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
      this.$router.push('moderatorlist')
    },
    EnableEdit(){
      this.view = false
    },
    deleteUser(){
      this.$router.push('moderatorlist')
    }
  },
};
</script>
<style>
</style>
