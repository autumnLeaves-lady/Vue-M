<template>
  <div
    class="shouye"
    @mousemove="moveLayer"
    @mouseenter="addActive"
    @mouseleave="removeActive"
  >
    <div
      v-show="visible"
      style="position: fixed;z-index: 1"
      ref="Layer"
    >
      <div style="width: 20px;height: 20px;border:1px solid #000;"></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    addActive() {
      this.visible = true;
      console.log('this.visible++++++: ', this.visible);
    },
    removeActive() {
      this.visible = false;
      console.log('this.visible------: ', this.visible);
    },
    moveLayer(event) {
      this.$refs.Layer.style.left = `${event.clientX - 10}px`;
      this.$refs.Layer.style.top = `${event.clientY - 10}px`;
    },
  },

};
</script>

<style lang="scss">
.shouye {
  // cursor: url("../assets/normal.ico"), pointer;
  height: 400px;
  background-color: rgb(191, 236, 236);
  // position: fixed;
}
</style>
