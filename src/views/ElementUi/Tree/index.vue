<template>
  <div>
    <el-tree
      ref="tree"
      :data="data"
      :props="defaultProps"
      node-key="id"
      default-expand-all
      show-checkbox
      :default-checked-keys="checked"
    ></el-tree>
    <el-button @click="test6" size="mini">获取半选节点</el-button>
  </div>
</template>

<script>
import initData from './data';

export default {
  name: 'tree-app', // tree-树
  data() {
    return {
      ...initData,
      checked: ['2-1'],
    };
  },
  methods: {
    test1() {
      this.$refs.tree.setChecked({ id: '2' }, true);
    },
    test2() {
      this.$refs.tree.setChecked({ id: '2' }, false);
    },
    test3() {
      this.$refs.tree.setChecked({ id: '2' }, true, true);
    },
    test4() {
      this.$refs.tree.setChecked({ id: '2' }, false, true);
    },
    test5() {
      this.$refs.tree.setCheckedKeys([]);
    },
    test6() {
      const checks = this.$refs.tree.getHalfCheckedNodes();
      console.log('checks:', JSON.parse(JSON.stringify(checks)));
    },
  },
};
</script>

<style>
</style>
