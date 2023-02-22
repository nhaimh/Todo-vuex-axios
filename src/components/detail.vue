<template>
  <!-- <button @click="showDetail = true">Show Modal</button> -->
  <b-modal id="bv-modal-example" hide-footer>
    <div v-if="showDetail">
      <div class="modal-overlay" @click="$emit('close-modal')"></div>
      <div class="modal-content">
        <header class="modal-header">
          <h3>Modal Title</h3>
          <b-button @click="$emit('close-modal')">X</b-button>
        </header>
        <section class="modal-body">
          <div style="margin: 15px 0px">
            <table class="table bg-light">
              <thead>
                <tr>
                  <th scope="col">Mã sự kiện</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Thời gian diễn ra</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Hình thức</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="item in items" :key="item.id"> -->
                <td scope="col">{{ item.id }}</td>
                <td scope="col">{{ item.description }}</td>
                <td scope="col">{{ item.title }}</td>
                <td>{{ item.createdDate }}</td>
                <td>{{ item.image }}</td>
                <td></td>
                <td>{{ item.status }}</td>
                <td></td>
                <!-- </tr> -->
              </tbody>
            </table>
          </div>
        </section>
        <footer class="modal-footer">
          <b-button @click="$emit('close-modal')">Close</b-button>
        </footer>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "vvDetail",
  props: {
    detail: Object,
    item: Object,
  },
  data() {
    return {
      showDetail: true,
    };
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
</style>
