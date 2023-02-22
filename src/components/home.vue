<template>
  <div class="Home">
    <div
      class="d-flex justify-content-between h-100"
      style="margin-left: 15px; margin-right: 0px"
    >
      <div
        class="d-flex align-items-center justify-content-space-between"
        style="width: auto; height: 30px; font-size: large"
      >
        <b-icon icon="gear" />
        <a>Chuyển đổi hệ thống</a>
      </div>
      <div
        class="d-flex align-items-center justify-content-between"
        style="width: 300px; margin-right: 0px; padding-right: 15px"
      >
        <b-icon icon="person" />
        <a>luongngochai29@gmail.com</a>
        <b-icon icon="chat-dots"></b-icon>
        <b-icon icon="globe2"></b-icon>
      </div>
    </div>
    <hr />

    <div
      class="d-flex align-items-center justify-content-between mt-1"
      style="background-color: #ffffff"
    >
      <div class="d-flex justify-content-start align-items-center">
        <b-icon icon="chevron-left"></b-icon>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 200px; padding: 5px"
          v-for="(title, index) of titles"
          :key="index"
        >
          <b-radio>{{ title.title }}</b-radio>
          <b-icon icon="x"></b-icon>
        </div>
      </div>
      <b-icon icon="chevron-right"></b-icon>
    </div>
    <hr />
    <addItem />
    <hr />
    <getItem />
  </div>
</template>

<script>
import getItem from "./getItem.vue";
import addItem from "./additem.vue";
export default {
  name: "AKHome",
  data() {
    return {
      titles: [
        {
          title: "Quản lý mã giảm giá",
        },
        {
          title: "Dữ liệu /Địa điểm",
        },
        {
          title: "nội dung/tag",
        },
        {
          title: "Dữ liệu/Tạo trường",
        },
        {
          title: "Nội dung/Sự kiện",
        },
      ],
    };
  },

  components: {
    getItem,
    addItem,
  },
  methods: {},
};
</script>

<style>
.Home {
  background: #fff;
}

b-button {
  height: 32px !important;
}
</style>
