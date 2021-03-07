<template>
  <div ref="child">
    <strong>子组件：</strong>
    <div>aa:{{aa}}</div>
    <hr>
    <grandSon />
  </div>
</template>

<script>
/* eslint-disable */
import grandSon from './grandSon.vue';

export default {
  name: 'children',
  components: {
    grandSon,
  },
    // provide() {
  //   return {
  //     aa: this.a,
  //   }
  // },
  inject: ['aa'],
  mounted() {
  },
  methods: {

  },
};
</script>

<style>
</style>
