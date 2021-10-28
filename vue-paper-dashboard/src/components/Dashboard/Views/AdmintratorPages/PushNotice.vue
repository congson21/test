<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Create new announcement</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-12">
                <fg-input
                  type="text"
                  label="Title"
                  placeholder="title"
                  v-model="title"
                >
                </fg-input>
              </div>
              <div class="col-md-12">
                <fg-input
                  type="text"
                  label="Content"
                  placeholder="input text here ..."
                  v-model="title"
                >
                </fg-input>
              </div>
              <div class="col-md-12">
                <el-select
                lable="Channel"
                multiple
                v-model="selects.multiple"
                placeholder="Channel"
              >
                <el-option
                  v-for="option in selects.Channels"
                  class="select-primary"
                  :value="option.value"
                  :key="option.label"
                >
                </el-option>
              </el-select>
              </div>
              
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info btn-fill btn-wd">
                Save
              </button>
            </div>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Select, Option } from "element-ui";
export default {
  components:{
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      title: null,
      selects: {
        Channels: [
          { value: "channel 1", label: "Channel 1" },
          { value: "channel 2", label: "Channel 2" },
          { value: "channel 3", label: "Channel 3" },
          { value: "channel 4", label: "Channel 4" },
        ],
      },
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
  },
};
</script>

