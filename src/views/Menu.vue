<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item,index) in menuLists">
        <el-submenu
          v-if="item.children"
          :key="index"
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
              >{{e.value}}</el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :key="ind"
              :index="el.key"
            >{{el.value}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :key="index"
          :index="item.key"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.value}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        {
          value: '导航一',
          key: '1',
          icon: 'el-icon-location',
          children: [
            {
              value: '分组一',
              key: '1-1',
              children: [{
                value: '选项一',
                key: '1-1-1',
              },
              {
                value: '选项二',
                key: '1-1-2',
              }],
            },
          ],
        },
        {
          value: '导航二',
          key: '2',
        },
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
.el-menu-vertical-demo{
  width: 200px;
}
</style>
