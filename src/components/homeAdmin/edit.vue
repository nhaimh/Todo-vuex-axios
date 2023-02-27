<template>
  <div class="modal fade show" tabindex="-1" role="dialog" v-if="showEdit">
    <div class="modal-dialog" role="document">
      <div class="modal-overlay" @click="$emit('close-modal')"></div>
      <div class="modal-content">
        <header class="modal-header">
          <h3>Modal Title</h3>
          <b-button @click="$emit('close-modal')" variant="danger">X</b-button>
        </header>
        <section class="modal-body">
          <div class="form-edit">
            <a>Id</a>
            <a>{{ itemDetail.id }}</a>
            <a>Tiêu đề</a>
            <b-input type="text" v-model="itemDetail.title" />
            <a>Trạng thái</a>
            <b-input type="text" v-model="itemDetail.status" />
            <a>Hình ảnh</a>
            <b-input type="text" v-model="itemDetail.image" />
            <a>Chi tiết</a>
            <b-input type="text" v-model="itemDetail.description" />
          </div>
        </section>
        <footer class="modal-footer">
          <b-button @click="$emit('close-modal')" variant="danger">Close</b-button>
          <b-button variant="outline-primary" @click="Update()">Update</b-button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "vvEditItem",
  data() {
    return {
      showEdit: true,
    };
  },
  props: {},
  methods: {
    ...mapActions(["updateItem", "getItem", "addItem"]),
    Update() {
      if (this.itemDetail.id) {
        this.updateItem({
          id: this.itemDetail.id,
          title: this.itemDetail.title,
          description: this.itemDetail.description,
          image: this.itemDetail.image,
          status: this.itemDetail.status,
          createdDate: this.itemDetail.createdDate,
        });
        return;
      }
      this.addItem({
        title: this.itemDetail.title,
        description: this.itemDetail.description,
        image: this.itemDetail.image,
        status: this.itemDetail.status,
        createdDate: this.itemDetail.createdDate,
      });

      this.showEdit = false;
      this.$emit("close-modal", true);
    },
  },
  computed: {
    ...mapGetters(["itemDetail"]),
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 515px !important;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.show {
  justify-content: center;
  display: flex !important;
}
.form-edit {
  display: flex;
  flex-direction: column;
}
</style>
