<template>
  <div id="app bv-exmaple-row">
    <b-row>
      <b-col sm="2" style="padding: 0px; background-color: black"
        ><SlideBar
      /></b-col>
      <b-col sm="10"><Home /></b-col>
    </b-row>
  </div>
</template>

<script>
import Home from "./components/home.vue";
import SlideBar from "./components/slidebar.vue";
export default {
  name: "App",
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
