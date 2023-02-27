<template>
  <div style="margin: 15px 0px">
    <editItem v-if="showEdit" v-show="showEdit" @close-modal="closeEdit" />
    <detailItem v-if="showDetail" v-show="showDetail" @close-modal="showDetail = false" />
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
        <tr v-for="(item, index) in items" :key="index">
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
                @click="getById(item.id), (showEdit = true)"
              >
                <b-icon icon="pencil-square"> </b-icon>
              </b-button>

              <b-button
                variant="outline-primary"
                @click="(showDetail = true), getById(item.id)"
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
    <b-pagination
      v-model="params.pageIndex"
      :total-rows="totalrow"
      :per-page="params.pageSize"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import editItem from "./edit.vue";
import detailItem from "./detail.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BndprjGetItem",
  components: {
    editItem,
    detailItem,
  },
  data() {
    return {
      params: {
        pageSize: 5,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
      showDetail: false,
      showEdit: false,
    };
  },
  watch: {
    "params.pageIndex"() {
      this.getItem(this.params);
    },
  },
  computed: {
    ...mapGetters(["items", "totalrow"]),
  },
  created() {
    this.getItem(this.params);
  },
  watch: {
    "params.pageIndex"() {
      this.getItem(this.params);
    },
  },

  methods: {
    ...mapActions(["deleteItem", "getItem", "getById"]),
    closeEdit(reload) {
      this.showEdit = false;
      if (reload) {
        this.params.pageIndex = 1;
        this.getItem(this.params);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
