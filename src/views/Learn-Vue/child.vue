<template>
  <div ref="child">
    <strong>子组件：</strong>
    {{a}}
    {{b}}
  </div>
</template>

<script>
/* eslint-disable */
import GrandSon from './grand-son.vue';

export default {
  name: 'children',
  components: {
    GrandSon,
  },
  props: ['a', 'b'],
  watch: {
    a: {
      handler(val) {
        console.log('子-watch-a: ', val);
      },
      deep: true,
      immediate: true,
    },
    b: {
      handler(val) {
        console.log('子-watch-b: ', val);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {

  },
};
</script>