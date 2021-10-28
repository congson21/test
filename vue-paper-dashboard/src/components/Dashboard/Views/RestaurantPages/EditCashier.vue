<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title"><span v-if="!view">Edit</span> Cashiers Profile</h4>
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-4">
            <img
              src="/static/img/mike.jpg"
              alt="W3Schools.com"
              width="100"
              height="132"
            />
          </div>

          <div class="col-md-7">
            <fg-input
              type="text"
              label="ID"
              :disabled="true"
              placeholder="id"
              v-model="user.id"
            >
            </fg-input>

            <fg-input
              :disabled="view"
              type="text"
              label="Name"
              placeholder="name"
              v-model="user.name"
            >
            </fg-input>

            <fg-input
              :disabled="view"
              type="Text"
              label="Phone"
              placeholder="phone"
              v-model="user.phone"
            >
            </fg-input>

            <label for="gender">Gender</label>
            <select :disabled="view" id="gender" class="form-control">
              <option
                v-for="item in gender"
                v-bind:key="item"
                :selected="item == 'Male'"
              >
                {{ item }}
              </option>
            </select>

            <fg-input
              :disabled="view"
              type="text"
              label="Adress"
              placeholder="adress"
              v-model="user.address"
            >
            </fg-input>

            <div class="text-center">
              <p-button v-on:click="EnableEdit" v-if="view" type="info"
                >Edit Profile</p-button
              >
              <button
                v-if="!view"
                type="submit"
                class="btn btn-info btn-fill btn-wd"
                @click.prevent="updateProfile"
              >
                Update Profile
              </button>
              <p-button v-if="view" v-on:click="deleteUser" type="danger"
                >Delete Cashier</p-button
              >
            </div>
          </div>
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
        name: "Thaovphe",
        phone: "0123456789",
        gender: "Female",
        address: "Sơn Tây",
      },
      gender: ["Male", "Female"],
      view: true,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
      this.$router.push("listcashiers");
    },
    EnableEdit() {
      this.view = false;
    },
    deleteUser() {
      this.$router.push("listcashiers");
    },
  },
};
</script>
<style>
</style>
