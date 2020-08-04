<template>
  <div>
    <el-button @click="event"> 按钮</el-button>
    <div>{{newCount}}</div>
  </div>
</template>

<script>
// import searchMixin from '@/utils/smallMixin';

export default {
  data() {
    return {
      count: { a: 10, b: 1 },
    };
  },
  computed: {
    newCount() {
      console.log('computed', this.count);
      return `${this.count}测试`;
    },
  },
  methods: {
    event() {
      this.count = 1;
    },
  },
};
</script>

<style>

</style>
