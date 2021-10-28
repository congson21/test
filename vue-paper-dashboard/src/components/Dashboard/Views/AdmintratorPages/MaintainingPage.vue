<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Maintaining button</h4>
          <p>This button is to stop all systems to maintaining/update</p>
        </div>
        <div class="card-body">
          <p-button
            v-if="isMaitaining"
            v-on:click="stop_maintain()"
            type="success"
            >Stop Maintaining</p-button
          >
          <p-button v-if="!isMaitaining" v-on:click="maintain()" type="warning"
            >Maintain Systems</p-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
       isMaitaining : false
    };
  },
  methods: {
    maintain() {
      this.isMaitaining = true;
    },
    stop_maintain(){
      this.isMaitaining = false;
    }
  },
 
};
</script>

