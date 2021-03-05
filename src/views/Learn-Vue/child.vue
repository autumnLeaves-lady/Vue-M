<template>
  <div ref="child">
    <strong>子组件：</strong>
    <el-button @click="test">测试</el-button>
    <div
      v-for="(item, index) in newTitle"
      :key="index"
    >
      {{item.type}}:{{item.name}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'children',
  props: {
    title: Array,
  },
  computed: {
    newTitle() {
      return this.title;
      // return this.title.map((item) => `${item.type}---${item.name}`);
    },
  },
  watch: {
    title(val) {
      console.log('监听到title被改变了: ', val);
    },
  },
  methods: {
    test() {
      this.$emit('update:title', [{ name: '孟丽娇', type: '子组件-真名字' }]);
    },
  },

};
</script>

<style>
</style>
