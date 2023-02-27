<template>
  <div>
    <Header />
    <div class="main-page">
      <div class="layout-main-page">
        <b-row>
          <b-col sm="1" style="padding-right: 0px">
            <sliderbar />
          </b-col>
          <b-col sm="11" style="padding-left: 0px">
            <Main />
            <br />
            <Footer />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/homeclient/header.vue";
// import Home from "../components/homeclient/aboutcomponent.vue";
import Main from "../components/homeclient/mainAbout.vue";
import sliderbar from "../components/homeclient/slidebar.vue";
import Footer from "../components/homeclient/footer.vue";
export default {
  name: "BndprjAbout",
  components: {
    Header,
    Main,
    sliderbar,
    Footer,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style>
.main-page {
}

.block-sidebar-menu-left {
  left: 0;
  opacity: 1;
  visibility: visible;
  display: none;
  transition: 0.5s;
  z-index: 12;
  position: fixed;
  width: 44px;
  top: 0;
  background: #fff;
  height: 100vh;
  z-index: 8;
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  padding-top: 48px !important;
}

.layout-sidebar-menu {
  padding-top: 10px;
  overflow-y: auto;
  width: 44px;
  overflow-x: hidden;
}

.item-menu-icon-sidebar {
  margin-bottom: 10px;
}

.icon-menu-icon-sidebar {
  display: block;
  position: relative;
  text-align: center;
  width: 36px;
  margin: 0 auto;
}
.footer-sidebar {
  text-align: center;
  width: 44px;
}

.box-content-sidebar {
  width: 280px;
  padding-top: 21px;
  padding-bottom: 40px;
  box-shadow: none;
  clip-path: none;
  transform: scale(1);
  height: 100vh;
  position: absolute;
  left: 44px;
  background: #fff;
  overflow-y: auto;
  display: none;
}
.icon-home-sidebar {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 6px;
  cursor: pointer;
  display: block;
  padding-left: 1px;
}
.item-menu-icon-sidebar {
  margin-bottom: 10px;
}
div {
  display: block;
}

a,
a:focus,
a:hover {
  text-decoration: none !important;
  color: inherit;
}

a {
  transition: all 0.3s;
}
</style>
