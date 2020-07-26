<template>
  <div id="app">
    <div
      id="header"
      class="header"
    >测试项目</div>
    <div class="main">
      <div class="nav">
        <router-link v-for="item in navList" :key="item.path" :to="item.path">{{item.text}}</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import SsMenu from '@/views/Menu.vue';

export default {
  name: 'shuwnejian',
  components: {
    // SsMenu,
  },
  data() {
    return {
      navList: [
        { text: '表格', path: '/' },
        { text: '输入框', path: '/about' },
        { text: '选择框', path: '/select' },
        { text: '图表', path: '/echart' },
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
    height: 30px;
  }
  .main {
    display: flex;
    height: calc(100% - 30px);
    .nav {
    background-color: rgb(43, 26, 73);
      width: 80px;
      // height: 400px;
      // background-color: bisque;
      display: flex;
      flex-direction: column;
      a {
        padding: 10px;
        font-weight: bold;
        color: #edf1f5;
        &.router-link-exact-active {
          color: #5bebaa;
        }
      }
    }
    .content {
      background-color: rgb(238, 245, 250);
      width: calc(100% - 20px);
      padding: 10px;
    }
  }
}
</style>
