<template>
  <div ref="child">
    <strong>孙组件：</strong>
    <div>aa:{{aa}}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'children',
  inject: ['aa'],
  mounted() {
    // console.log('孙组件foo: ', this.foo);
  },
};
</script>

<style>
</style>
