<template>
  <div id="app">
    <div
      id="header"
      class="header"
    >测试项目</div>
    <div class="main">
      <div class="nav">
        <nav-menu></nav-menu>
      </div>
      <div class="content">
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
      navList: [
        { text: '步骤条', path: '/step' },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
    height: 100px;
  }
  .main {
    display: flex;
    height: calc(100% - 100px);
    .nav {
      // width: 200px;
    }
    .content {
      background-color: rgb(238, 245, 250);
      width: 100%;
      padding: 10px;
    }
  }
}
</style>
