<template>
  <div ref="child">
    子组件{{num}}
  </div>
</template>

<script>
export default {
  name: 'children',
  data() {
    return {
      // num: 1,
    };
  },
  props: {
    a: String,
    b: String,
    num: Number,
  },
  beforeCreate() {
    // console.log('beforeCreate: ', this.num);

  },
  async created() {
    console.log('created-子: ', this.num);
  },
  beforeMount() {
    console.log('beforeMount-子: ', this.num);
  },
  mounted() {
    console.log('mounted-子: ', this.num);
  },
  beforeUpdate() {
    console.log('beforeUpdate-子: ', this.num);
  },
  updated() {
    console.log('updated-子: ', this.num);
  },
  beforeDestroy() {
    console.log('beforeDestroy-子: ', this.num);
  },
  destroyed() {
    console.log('destroyed-子: ', this.num);
  },
  methods: {
    event() {
      // this.num += 2;
      // console.log('改变num：', this.num);
    },
  },
};
</script>

<style>
</style>
