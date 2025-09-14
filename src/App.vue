<<<<<<< HEAD
<template>
    <component :is="layout">
      <router-view></router-view>
  </component>
</template>

<script>
const default_layout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
<style>
</style>
=======
<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>
>>>>>>> d22e606 (code homeview)
