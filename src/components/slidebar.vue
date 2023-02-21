<template>
  <div vertical class="slidebar">
    <div class="btn btn-primary w-100">BND SYSTEM</div>
    <button v-b-toggle.collapse-a class="w-100 btn-system">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-folder-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
        />
      </svg>
      Danh mục
    </button>
    <b-collapse id="collapse-a" class="mt-2 black">
      <b-card>Nhóm danh mục</b-card>
    </b-collapse>
    <b-collapse id="collapse-a" class="mt-1">
      <b-card>Doanh mục chung</b-card>
    </b-collapse>
    <b-collapse id="collapse-a" class="mt-1">
      <b-card>Doanh mục theo khối</b-card>
    </b-collapse>
    <button v-b-toggle.collapse-b class="w-100 btn-system">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-folder-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
        />
      </svg>
      Dữ liệu
    </button>
    <b-collapse id="collapse-b" class="mt-2 black">
      <b-card>Địa điểm</b-card>
    </b-collapse>
    <b-collapse id="collapse-b" class="mt-1">
      <b-card>Công ty</b-card>
    </b-collapse>
    <button v-b-toggle.collapse-c class="w-100 btn-system">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-folder-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
        />
      </svg>
      Nội dung
    </button>
    <b-collapse id="collapse-c" class="mt-2 black">
      <b-card>Bài viết</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Tác giả</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Vùng nổi bật</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Sự kiện</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Cuộc thi</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Tags</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Meta</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Trang tính</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Đối tượng</b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-1">
      <b-card>Combo sản phẩm</b-card>
    </b-collapse>
    <button v-b-toggle.collapse-d class="w-100 btn-system">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-folder-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
        /></svg
      >Tương tác
    </button>
    <b-collapse id="collapse-d" class="mt-1">
      <b-card>Tương Tác 1</b-card> </b-collapse
    ><b-collapse id="collapse-d" class="mt-1">
      <b-card>Tương Tác 2</b-card> </b-collapse
    ><b-collapse id="collapse-d" class="mt-1">
      <b-card>Tương Tác 3</b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "AKSlidebar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style >
.slidebar {
  background-color: black;
  height: max-content;
  padding: 0px;
}
.btn-system {
  background-color: #001529;
  color: aliceblue;
}
.card-body {
  display: flex;
  justify-content: left;
  color: aliceblue;
  background-color: black;
  padding: 0px 0px 0px 80px !important;
}
.card {
  border: 0px !important;
}
</style>