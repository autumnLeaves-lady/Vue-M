<template class="menu-box">
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="active"
    collapse
  >
    <template v-for="(item,index) in menuLists">
      <el-submenu
        v-if="item.children"
        :key="index"
        :index="item.key"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.value}}</span>
        </template>
        <template v-for="(el, ind) in item.children">
          <el-submenu
            v-if="el.children"
            :key="ind"
            :index="el.key"
          >
            <span slot="title">{{el.value}}</span>
            <el-menu-item
              v-for="(e, i) in el.children"
              :key="i"
              :index="e.key"
              @click.native="selectMenu(e)"
            >{{e.value}}</el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :key="ind"
            :index="el.key"
            @click.native="selectMenu(el)"
          >{{el.value}}</el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item
        v-else
        :key="index"
        :index="item.key"
        @click.native="selectMenu(item)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.value}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import routerData from '@/router/data';

export default {
  name: 'menu-box',
  data() {
    return {
      menuLists: routerData,
      active: '',
      openedsArr: [],
    };
  },
  methods: {
    selectMenu(data) {
      const { path, key } = data;
      this.$router.push(path);
      this.active = key;
    },
    handleOpen(key, keyPath) {
      this.openedsArr = keyPath;
      console.log('打开', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('关闭', key, keyPath);
      this.openedsArr = keyPath;
      // const newArr = keyPath;
      // if (keyPath.includes(key)) {
      //   newArr.splice(keyPath.indexOf(key), 1);
      //   this.openedsArr = newArr;
      // } else {
      //   this.openedsArr = keyPath;
      // }
      // console.log('关闭2', key, this.openedsArr);
    },
  },
};
</script>

<style  lang="scss">
.el-menu-vertical-demo {
  height: 100%;
}
</style>
