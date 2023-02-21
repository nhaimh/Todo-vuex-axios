import axios from "axios";
const ItemModules = {
  state: {
    items: [],
    itemSelected: {},

  },
  getters: {
    items: (state) => state.items,

  },
  actions: {
    async getItem({ commit }, params) {
      try {
        const response = await axios.post(`http://192.168.1.200:9000/api/Blog/List`, params);
        commit("SET_ITEMS", response.data.result.data);
        console.log(response.data.result.data);

      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem({ commit }, itemId) {
      try {
        await axios.delete(`http://192.168.1.200:9000/api/Blog/Delete/?Id=${itemId}`);
        commit("DELETE_ITEM", itemId);
      } catch (error) {
        console.log(error);
      }
    },
    async addItem({ commit }, newItem) {
      try {
        await axios.post(`http://192.168.1.200:9000/api/Blog/Save/`, newItem);
        commit("ADD_ITEM", newItem);
      } catch (error) {
        console.log(error);
      }
    },
    async updateItem({ commit }, currentItem) {
      try {
        await axios.post(`http://192.168.1.200:9000/api/Blog/Save/`, currentItem)
        commit("UPDATE_ITEM", currentItem)
      } catch (error) {
        console.log(error)
      }
    }


  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    ADD_ITEM(state, newItem) {
      state.items.unshift(newItem);
    },
    DELETE_ITEM(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    UPDATE_ITEM(state, currentItem) {
      state.items.push(currentItem)
    }

  },
};
export default ItemModules;
