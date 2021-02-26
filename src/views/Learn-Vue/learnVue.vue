<template>
  <div ref="box">
    <div>
    父组件：{{a}}
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
    event(param1,param2) {
      console.log('param1,param2: ', param1,param2);
    },
  }

};
</script>

<style>
</style>
