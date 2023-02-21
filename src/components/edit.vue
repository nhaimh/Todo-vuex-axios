<template>
  <div>
    <!-- <button @click="showModal = true">Show Modal</button> -->

    <div v-if="showModal">
      <div class="modal-overlay" @click="showModal = false"></div>
      <div class="modal-content">
        <header class="modal-header">
          <h3>Modal Title</h3>
          <button @click="showModal = false">X</button>
        </header>
        <section class="modal-body">
          <div class="form-edit">
            <a>Id</a>
            <a>{{ currentItem.id }}</a>
            <a>Tiêu đề</a>
            <input type="text" v-model="currentItem.title" />
            <a>Trạng thái</a>
            <input type="text" v-model="currentItem.status" />
            <a>Hình ảnh</a>
            <input type="text" v-model="currentItem.image" />
            <a>Chi tiết</a>
            <input type="text" v-model="currentItem.description" />
          </div>
        </section>
        <footer class="modal-footer">
          <button @click="showModal = false">Close</button>
          <button @click="Update">Update</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: " EditItem",
  data() {
    return {
      showModal: true,
      currentItem: Object.assign({}, this.item),
    };
  },
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["updateItem", "getItem"]),
    Update() {
      this.updateItem({
        title: this.currentItem.title,
        description: this.currentItem.description,
        image: this.currentItem.image,
        status: this.currentItem.status,
        createdDate: this.currentItem.createdDate,
      });
    },
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

button {
  padding: 10px 20px;
  background: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.form-edit {
  display: flex;
  flex-direction: column;
}
</style>