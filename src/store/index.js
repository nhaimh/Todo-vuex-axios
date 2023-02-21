import Vue from "vue";
import Vuex from "vuex";
import items from "./modules/items";
Vue.use(Vuex);

const storeData = {
  modules: {
    items,
  },
};
const store = new Vuex.Store(storeData);
export default store;
