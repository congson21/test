<template>
  <div class="register-success-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page register-page section-image" filter-color="black">
        <div class="content">
          <div class="container annoucediv">
              <img
                class="icon"
                src="/static/img/checkmark.png"
                alt="SuccessIcon"
              />
              <div>
                <p class="titles">Success</p>
                <p >
                  {{ message }}
                </p>
              </div>
          </div>
        </div>
        <!-- <app-footer></app-footer> -->
        <div
          class="full-page-background"
          style="
            background-image: url(/static/img/background/jan-sendereks.jpg);
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import AppNavbar from "./Layout/AppNavbar";
import AppFooter from "./Layout/AppFooter";
import { Card } from "src/components/UIComponents";
import formMixin from "@/mixins/form-mixin";
export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      message:
        "Thanks for choosing us. Your request will be evaluated in 3 - 5 days. We will contact to you soon.",
    };
  },
  methods: {},
};
</script>
<style>
.icon {
  width: 30%;
  height: 20%;
}
.titles {
  color: green;
  font-weight: bold;
  font-size: 30px;
}
.annoucediv {
  display: flex;
 padding: 10px;
 background-color: white;
 border-radius: 15px;
 width: 500px;

}

</style>