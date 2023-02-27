<template>
  <div class="clearfix" style="background-color: #ffffff">
    <div class="d-flex flex-row justify-content-between" v-if="showAdditem">
      <div class="p-1 m-2">
        <label for="cars">Tên</label>
        <b-input type="text" placeholder="Nhập tên" v-model="form.description"></b-input>
      </div>
      <div class="p-1 m-2">
        <label>Tên tiêu đề:</label>
        <b-input type="text" placeholder="Nhập tiêu đề" v-model="form.title" />
      </div>
      <div class="p-1 m-2">
        <label for="cars">Hình Thức sự kiện</label>
        <b-input type="text" placeholder="Nhập hình thức" v-model="form.image"></b-input>
      </div>
      <div class="p-1 m-2">
        <label for="cars">Ngày tổ chức</label>
        <b-input type="date"></b-input>
      </div>
      <div class="p-1 m-2">
        <label for="cars">Hình ảnh</label>
        <b-input type="text" placeholder="Nhập hình ảnh"></b-input>
      </div>
      <div class="ml-auto d-flex align-items-end">
        <button class="border border-dark p-1 m-2 rounded" @click="showAdditem = false">
          Close
        </button>
        <button class="border border-dark p-1 m-2 rounded" @click="themItem()">
          Add
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-end align-items-end" style="">
      <input type="text" class="p-1 m-2" v-model="params.keyWord" />
      <b-button
        class="icon border border-secondary bg-primary text-white rounded p-1 m-2"
        @click="getItem(params)"
      >
        Tìm kiếm
      </b-button>

      <b-button
        class="icon border border-secondary rounded p-1 m-2 bg-light text-dark"
        @click="lammoi()"
      >
        Làm mới
      </b-button>
      <b-button
        class="icon border border-secondary bg-primary text-white rounded p-1 m-2"
        @click="showAdditem = true"
      >
        + Tạo sự kiện</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BndprjAdditem",

  data() {
    return {
      params: {
        pageSize: 5,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
      form: {
        title: "",
        description: "",
        image: "",
        status: 0,
      },
      showAdditem: false,
    };
  },
  watch: {
    "params.pageIndex"() {
      this.getItem(this.params);
    },
  },

  mounted() {},

  methods: {
    ...mapActions(["deleteItem", "getItem", "addItem", "getById"]),
    themItem() {
      this.addItem(this.form);
      this.showAdditem = false;
      this.getItem(this.params);
    },
    lammoi() {
      this.params.keyWord = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
