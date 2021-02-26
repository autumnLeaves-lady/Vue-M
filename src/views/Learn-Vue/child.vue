<template>
  <div ref="child">
    子组件：{{a}}
    <div
      v-for="(item, index) in title"
      :key="index"
    >
      {{item.type}}：{{item.name}}
    </div>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'children',
  props: {
    a: String,
    title: Array,
  },
  methods: {
    test() {
      this.a = 'aaaaaaaaaaaaaaaaa';
      console.log('this.a: ', this.a);
      // this.title.push({ name: '孟丽娇', type: '真是名字' });
      // this.title = [{ name: '孟丽娇', type: '真是名字' }];
      // console.log('this.title: ', this.title);
      // this.$emit('update:title', 123);
    },
  },

};
</script>

<style>
</style>
