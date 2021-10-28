<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Create New Moderator Account</h4>
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-6">
            <fg-input
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
              type="Moderator's name"
              label="name"
              placeholder="name"
              v-model="user.name"
            >
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <fg-input
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
              type="text"
              label="Phone number"
              placeholder="phone number"
              v-model="user.phonenumber"
            >
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Adress"
              placeholder="adress"
              v-model="user.adress"
            >
            </fg-input>
          </div>
          
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="mb-2 mt-1">Store's logo</p>
                    <input type="file" @change="onFileSelected" />
                    <div id="preview">
                      <img v-if="url" :src="url" />
                    </div>
          </div>
          
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-info btn-fill btn-wd"
            @click.prevent="createNewAccount"
          >
            Save
          </button>
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
        username: "",
        name: "",
        email: "",
        address: "",
        phonenumber: "",
        img: "",
      },
      url : null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.store_logo = event.srcElement.files[0];
      this.url = URL.createObjectURL(this.store_logo);
    },
    createNewAccount() {
      alert("Your data: " + JSON.stringify(this.user));
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
</style>
