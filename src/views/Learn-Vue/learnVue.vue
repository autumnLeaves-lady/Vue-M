<template>
  <div ref="box">
    <el-button @click="event">按钮</el-button>{{num}}

    <!-- <child-components
      :a="a"
      :b="b"
      :num="num"
    /> -->
  </div>
</template>

<script>
/* eslint-disable */
// import searchMixin from '@/utils/smallMixin';
import ChildComponents from './childComponents.vue';

export default {
  data() {
    return {
      a: '秋',
      b: 'B',
      show: false,
      num: 1,
    };
  },
  components: { ChildComponents },
  beforeCreate() {
    console.log('beforeCreate-父: ', this.num);
  },
  created() {
    console.log('created-父: ', this.num);
  },
  beforeMount() {
    console.log('beforeMount-父: ', this.num);
  },
  mounted() {
    this.num += 2;
    console.log('mounted-父: ', this.num);
  },
  beforeUpdate() {
    console.log('beforeUpdate-父: ', this.num);
  },
  updated() {
    console.log('updated-父: ', this.num);
  },
  beforeDestroy() {
    console.log('beforeDestroy-父: ', this.num);
  },
  destroyed() {
    console.log('destroyed-父: ', this.num);
  },
  methods: {
    event() {
      // this.a = this.a + '木';
      // console.log('改变a：', this.a);
      this.show = !this.show
    },
  },
};
</script>

<style>
</style>
