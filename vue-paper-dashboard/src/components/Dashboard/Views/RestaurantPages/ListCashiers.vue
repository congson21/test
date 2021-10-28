<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="title">List of Cashiers</h4>
        </div>
        <div class="card-body">
          <div class="card-body table-responsive table-full-width">
            <el-table :data="listCashier">
              <el-table-column min-width="50" type="index"></el-table-column>
              <el-table-column min-width="150" prop="name" label="Name">
              </el-table-column>
              <el-table-column min-width="150" prop="email" label="Email">
              </el-table-column>
              <el-table-column min-width="150" prop="phone" label="Phone number">
              </el-table-column>
              <el-table-column
                label=""
                property="Detail"
              >
              <p-button
                  type="info"
                  v-on:click="viewDetailCashier"
                  >View</p-button
                ></el-table-column>
            </el-table>
          </div>
          <export-excel
            class="btn btn-info"
            :data="tableData"
            worksheet="My Worksheet"
            name="ListCashiers.xls"
          >
            Download Excel
          </export-excel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import excel from "vue-excel-export";
import { Table, TableColumn } from "element-ui";
import { GET_LIST_CASHIER } from "../../../../../src/constants/api.js";
import axios from "axios";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(excel);

export default {
  data() {
    return {
      listCashier: null,
    };
  },
  methods: {
    viewDetailCashier() {
      this.$router.push("cashiermanagement");
    },

    async getProfile() {
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.token}`;
        const response = await axios.get(GET_LIST_CASHIER);
        this.listCashier = response.data.data;
        console.log("this " , this.listCashier)
      } catch (error) {
        console.log(error)
        // await this.$notify({
        //   type: "danger",
        //   message: "Server is not responsed",
        // });
        // return;
      }
    },
  },
  created() {
    this.getProfile();
  },
};
</script>

