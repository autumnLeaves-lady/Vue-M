<template>
  <div id="app">
    <div
      id="header"
      class="header"
    >测试项目</div>
    <div class="main">
      <div :class="collapse?'nav1':'nav2'">
        <nav-menu
          :collapse="collapse"
          @iconChange="iconChange"
        ></nav-menu>
      </div>
      <div :class="collapse?'content1':'content2'">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/views/ElementUi/Menu.vue';

export default {
  name: 'shuwnejian',
  components: {
    NavMenu,
  },
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    iconChange() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  .header {
    background-color: #729bc3;
    height: 50px;
  }
  .main {
    display: flex;
    height: calc(100% - 50px);
    .nav1 {
      width: 64px;
    }
    .nav2 {
      width: 200px;
    }
    .content1 {
      background-color: rgb(238, 245, 250);
      width: calc(100% - 64px);
      padding: 10px;
    }
    .content2 {
      background-color: rgb(238, 245, 250);
      width: calc(100% - 200px);
      padding: 10px;
    }
  }
}
</style>
