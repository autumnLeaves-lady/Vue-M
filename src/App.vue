<template>
  <div id="app">
    <div
      id="header"
      class="header"
    >测试项目</div>
    <div id="nav">
      <router-link to="/">表格</router-link> |
      <router-link to="/about" exact>输入框</router-link> |
      <router-link to="/select" exact>选择框</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import SsMenu from '@/views/Menu.vue';

export default {
  name: 'shuwnejian',
  components: {
    // SsMenu,
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
  .header {
    background-color: #729bc3;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
