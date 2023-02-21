import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store/index";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(VueAxios, { $request: axios });
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
