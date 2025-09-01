<template>
    <topWagon></topWagon>
    <menuWagon></menuWagon>
        <router-view></router-view>
    <botWagon></botWagon>
</template>
<script>
import "../../assets/js/jquery.min.js";
import "../../assets/js/bootstrap.min.js";
import "../../assets/js/jquery.sticky.js";
import "../../assets/js/click-scroll.js";
import "../../assets/js/counter.js";
import "../../assets/js/custom.js";
import BotWagon from    "../components/BotWagon.vue";
import TopWagon from    "../components/TopWagon.vue";
import MenuWagon from   "../components/MenuWagon.vue";

export default {
    name        : "app",
    components  : {
        BotWagon, 
        TopWagon,
        MenuWagon,
    },
    mounted() {
    if (window.$ && typeof window.$('.navbar').sticky === "function") {
      const $nav = window.$('.navbar');
      if ($nav.parent('.sticky-wrapper').length) {
        $nav.unwrap(); 
        window.$(window).off(".sticky");
      }
      $nav.sticky({ topSpacing: 0 });
    }
  },
};
</script>
<style>
@import "../../assets/css/bootstrap.min.css"; 
@import "../../assets/css/bootstrap-icons.css"; 
@import "../../assets/css/templatemo-kind-heart-charity.css"; 
</style>