<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <TopWagon></TopWagon>
      <MenuWagon></MenuWagon>
    </div>
    <div class="page-wrapper">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <BotWagon></BotWagon>
  </div>
</template>
<script>
import "../../../assets/js/bootstrap.bundle.min.js";
import "../../../assets/js/jquery.min.js";
import "../../../assets/plugins/simplebar/js/simplebar.min.js";
import "../../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../../assets/js/index.js";
import "../../../assets/js/app.js";
import "../../../assets/js/pace.min.js";
import BotWagon from "../../components/Admin/BotWagon.vue";
import TopWagon from "../../components/Admin/TopWagon.vue";
import MenuWagon from "../../components/Admin/MenuWagon.vue";
export default {
  name: "app",
  components: {
    BotWagon,
    MenuWagon,
    TopWagon,
  },
};
</script>
<style>
@import "../../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../../assets/plugins/simplebar/css/simplebar.css";
@import "../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../../assets/css/pace.min.css";
@import "../../../assets/css/bootstrap.min.css";
@import "../../../assets/css/bootstrap-extended.css";
@import "../../../assets/css/app.css";
@import "../../../assets/css/icons.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");
</style>