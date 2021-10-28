<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">List of Cashiers</h4>
        </div>
        <div class="card-body">
          <div class="card-body table-responsive table-full-width">
            <el-table :data="tableData">
              <el-table-column
                label="Id"
                property="id"
                width="100px"
              ></el-table-column>
              <el-table-column label="Owner" property="name"> </el-table-column>
              <el-table-column label="Store's name" property="storename">
              </el-table-column>
              <el-table-column
                label="Phone number"
                property="phonenumber"
              ></el-table-column>
              <el-table-column
                label="Status"
                property="status"
              >
              
              <p-button v-if="status == 'new'" type="info">new </p-button>
              <p-button v-if="status == 'Rejeted'" type="danger">rejected</p-button>
              </el-table-column>
              <el-table-column label="Details" property="#">
                <p-button v-on:click="showdata" type="info">View</p-button></el-table-column
              >
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
          storename: "Store 1",
          phonenumber: "012345678",
          gender: "Nữ",
          address: "Sơn Lộc",
          status: "New",
        },
        {
          id: 2,
          name: "Đào Công Sơn",
          storename: "Store 2",
          phonenumber: "012345678",
          gender: "Nam",
          address: "Xuân Khanh",
          status: "New",
        },
        {
          id: 3,
          name: "Lê Mạnh Cương",
          storename: "Store 3",
          phonenumber: "012345678",
          gender: "Nam",
          address: "Hà Đông",
          status: "Accepted",
        },
        ,
        {
          id: 4,
          name: "Hoàng Đình Khanh",
          storename: "Store 4",
          phonenumber: "012345678",
          gender: "Nam",
          address: "Cầu Giấy",
          status: "Accepted",
        },
        {
          id: 5,
          name: "Đào Kiều Anh",
          storename: "Store 5",
          phonenumber: "012345678",
          gender: "Nam",
          address: "Giải Phóng",
          status: "Rejeted",
        },
      ],
    };
  },
  methods: {
    showdata(){
      alert(this.tableData[1].status);
    }
  },
};
</script>
<style scoped>
.New {
  color: #2ba9cd;
}
.Accepted {
  color: green;
}
.Rejeted {
  color: red;
}
</style>
