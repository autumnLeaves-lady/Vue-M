<template>
  <div ref="box">
    <div>
      <strong>父组件:</strong>
      <el-button @click="test">测试</el-button>
      <div
        v-for="(item, index) in title"
        :key="index"
      >
        {{item.type}}：{{item.name}}
      </div>
    </div>
    <hr>
    <child-components
      :a.sync="a"
      :title.sync="title"
    />
  </div>
</template>

<script>
/* eslint-disable */

// import searchMixin from '@/utils/smallMixin';
import ChildComponents from './child.vue';

export default {
  data() {
    return {
      a: '12',
      title: [
        {
          name: 'mlj',
          type: '首字母缩写'
        },
        {
          name: '秋木叶',
          type: '昵称'
        },
      ],
    };
  },
  components: { ChildComponents },

  mounted() {
  },
  methods: {
    test() {
      this.title[2] = { name: '孟丽娇', type: '父组件-真是名字' };
    },
  }

};
</script>

<style>
</style>
