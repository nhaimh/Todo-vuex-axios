<template>
  <div class="Home">
    <div class="d-flex justify-content-between h-100" style="margin-left: 15px">
      <div class="d-flex align-items-center justify-content-between" style="width: 180px">
        <b-icon icon="gear" />
        <a>Chuyển đổi hệ thống</a>
      </div>
      <div class="d-flex align-items-center justify-content-between" style="width: 300px">
        <b-icon icon="person" />
        <a>luongngochai29@gmail.com</a>
        <b-icon icon="chat-dots"></b-icon>
        <b-icon icon="globe2"></b-icon>
      </div>
    </div>

    <div
      class="d-flex align-items-center justify-content-between mt-1 border-bottom p-1"
      style="background-color: #ffffff"
    >
      <div class="d-flex justify-content-start align-items-center">
        <b-icon icon="chevron-left"></b-icon>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 200px; padding: 5px"
        >
          <b-radio>Quản lý mã giảm giá</b-radio>
          <b-icon icon="x"></b-icon>
        </div>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 200px; padding: 5px"
        >
          <b-radio>Dữ liệu /Địa điểm</b-radio>
          <b-icon icon="x"></b-icon>
        </div>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 200px; padding: 5px"
        >
          <b-radio>nội dung/tag</b-radio>
          <b-icon icon="x"></b-icon>
        </div>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 230px; padding: 5px"
        >
          <b-radio>Dữ liệu/Tạo trường học</b-radio>

          <b-icon icon="x"></b-icon>
        </div>
        <div
          class="d-flex justify-content-around border border-1 align-items-center mx-1"
          style="width: 200px; padding: 5px"
        >
          <b-radio>Nội dung/Sự kiện</b-radio>
          <b-icon icon="x"></b-icon>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <b-icon icon="chevron-right"></b-icon>
        <b-icon icon="arrow-down-circle border-start" style="padding: 5px"></b-icon>
        <b-icon icon="border-start" style="padding: 5px"></b-icon>
      </div>
    </div>

    <div
      class="row m-1 form-container three d-flex justify-content-space-between"
      style="background-color: #ffffff"
    >
      <div class="d-flex flex-row" v-if="showAdditem">
        <b-div>
          <b-label for="cars">Description</b-label>
          <b-input type="text" v-model="form.description"></b-input>
        </b-div>
        <div>
          <label>Tên tiêu đề:</label>
          <b-input type="text" placeholder="Nhập tiêu đề" v-model="form.title" />
        </div>
        <div>
          <label for="cars">Hình Thức sự kiện</label>
          <b-input type="text" v-model="form.image"></b-input>
        </div>
        <b-button
          class="bg-primary border border-primary"
          id="toggle-btn"
          @click="close()"
        >
          Close</b-button
        >
        <b-button
          class="bg-primary border border-primary"
          id="toggle-btn"
          @click="themItem()"
        >
          Thêm mới</b-button
        >
      </div>
      <div class="d-flex flex-row" style="">
        <div>
          <input type="text" v-model="params.keyWord" />
          <button class="icon border border-light bg-primary text-white rounded p-1 m-2">
            <b-button
              class="bg-primary border border-primary"
              id="toggle-btn"
              @click="getItem()"
            >
              Tìm kiếm
              <b-icon icon="search" />
            </b-button>
          </button>
        </div>
        <button class="icon border border-light rounded p-1 m-2" @click="lammoi()">
          <b-icon icon="arrow-clockwise"></b-icon>
          <label type="button" class="mx-1">Làm mới</label>
        </button>
        <button class="icon border border-light bg-primary text-white rounded p-1 m-2">
          <b-button
            class="bg-primary border border-primary"
            id="toggle-btn"
            @click="hideen()"
          >
            +Tạo sự kiện</b-button
          >
        </button>
      </div>
    </div>
    <editItem
      v-if="showEdit"
      :item="currentItem"
      v-show="showEdit"
      @close-modal="showEdit = false"
    />
    <detailItem
      v-if="showDetail"
      :item="detail"
      v-show="showDetail"
      @close-modal="showDetail = false"
    />
    <div style="margin: 15px 0px">
      <table class="table bg-light">
        <thead>
          <tr>
            <th scope="col">
              Mã sự kiện
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Tên
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Tiêu đề
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Thời gian diễn ra
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Hình ảnh
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Hình thức
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Trạng thái
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
            <th scope="col">
              Hành động
              <b-icon icon="arrow-down-up"></b-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td scope="col">{{ item.id }}</td>
            <td scope="col">{{ item.description }}</td>
            <td scope="col">{{ item.title }}</td>
            <td>{{ item.createdDate }}</td>
            <td>{{ item.image }}</td>
            <td></td>
            <td>{{ item.status }}</td>
            <td>
              <b-button-group>
                <b-button
                  variant="outline-primary"
                  @click="(currentItem = item), (showEdit = true)"
                >
                  <b-icon icon="pencil-square"> </b-icon>
                </b-button>

                <b-button
                  variant="outline-primary"
                  @click="(showDetail = true), (detail = item)"
                >
                  <b-icon icon="person-fill"> </b-icon>
                </b-button>
                <b-button variant="outline-primary" @click="deleteItem(item.id)">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import editItem from "./edit.vue";
import detailItem from "./detail.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AKHome",
  data() {
    return {
      currentItem: null,
      detail: null,
      params: {
        pageSize: 12,
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
      showDetail: false,
      showEdit: false,
    };
  },

  components: {
    editItem,
    detailItem,
  },
  computed: {
    ...mapGetters(["items"]),
  },
  mounted() {
    // this.listItem();
  },
  created() {
    this.getItem(this.params);
  },
  methods: {
    ...mapActions(["deleteItem", "getItem", "addItem", "getById"]),
    themItem() {
      this.addItem(this.form);
      this.showAdditem = false;
      // this.getItem(this.params);
    },
    lammoi() {
      this.params.keyWord = "";
    },
    hiddenUpdateitem() {
      this.currentItem = false;
    },
    hideen() {
      this.showAdditem = true;
    },
    close() {
      this.showAdditem = false;
    },
    // listItem() {
    //   const params = {
    //     sortExpression: null,
    //     pageSize: 10,
    //     pageIndex: 1,
    //     skip: 0,
    //     notSkip: 0,
    //     status: 0,
    //     keyWord: null,
    //   };
    //   this.$request
    //     .get(`http://localhost:8000/api/items`, params)
    //     .then((res) => {
    //       this.items = res.data;
    //     })
    //     .catch((e) => {
    //       this.errors.push(e);
    //     });
    // },
    // onDelete(itemId) {
    //   this.$swal
    //     .fire({
    //       title: "Do you want to delete?",
    //       showDenyButton: false,
    //       showCancelButton: true,
    //       confirmButtonText: "ok",
    //       denyButtonText: `Don't save`,
    //     })
    //     .then((result) => {
    //       if (result.isConfirmed) {
    //         this.$request
    //           .delete(`http://localhost:8000/api/items/${itemId}`)
    //           .then((res) => {
    //             if (res.success) {
    //               this.$swal.fire("Delete!", "", "success");
    //               this.listItem();
    //             }
    //           });
    //       }
    //     });
    // },
    // addItem() {
    //   this.$request
    //     .post(`http://localhost:8000/api/items`, this.product)
    //     .then(() => {
    //       this.listItem();
    //     });
    // },
  },
};
</script>

<style>
.Home {
  background: #ececec;
}

.form_input {
  width: 200px !important;
}

.form-container {
  display: flex;
  align-content: center;
}

.three {
  display: flex !important;
  justify-content: flex-end;
}
</style>
