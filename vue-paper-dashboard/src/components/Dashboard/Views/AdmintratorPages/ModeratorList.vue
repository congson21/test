<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">List of moderator</h4>
        </div>
        <div class="card-body">
          <div class="card-body table-responsive table-full-width">
            <el-table :data="tableData">
              <el-table-column
                label="Id"
                property="id"
                width="100px"
              ></el-table-column>
              <el-table-column label="Name" property="name"></el-table-column>
              <el-table-column
                label="Phone Number"
                property="phone"
              ></el-table-column>
              <el-table-column label="" property="city">
                <p-button
                  type="danger"
                  >Ban</p-button
                >
              </el-table-column>
              <el-table-column
                label=""
                property="salary"
              >
              <p-button
                  type="info"
                  v-on:click="viewDetailModerator"
                  >View</p-button
                ></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn } from "element-ui";
Vue.use(Table);
Vue.use(TableColumn);

export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "Vũ Phương Thảo",
          phone: "0912345678",
          city: "Oud-Turnhout",
        },
        {
          id: 2,
          name: "Hoàng Đình Khanh",
          phone: "0912345678",
          city: "Sinaai-Waas",
        },
        {
          id: 3,
          name: "Kiều Anh",
          phone: "0912345678",
          city: "Baileux",
        },
        {
          id: 4,
          name: "Đào Công Sơn",
          phone: "0912345678",
          city: "Overland Park",
        },
        {
          id: 5,
          name: "Lê Mạnh Cương",
          phone: "0912345678",
          city: "Feldkirchen in Kärnten",
        },
      ],
    };
  },
  methods: {
    viewDetailModerator(){
      this.$router.push('managemoderator')
    }
  },
 
};
</script>

