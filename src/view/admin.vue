<template>
  <div id="app ">
    <b-row>
      <b-col sm="2" style="padding: 0px; background-color: black"><SlideBar /></b-col>
      <b-col sm="10"><Home /></b-col>
    </b-row>
    <router-view />
  </div>
</template>

<script>
import Home from "../components/homeAdmin/home.vue";
import SlideBar from "../components/homeAdmin/slidebar.vue";
export default {
  name: "Admin",
  components: {
    Home,
    SlideBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  margin: 0;
}
</style>
