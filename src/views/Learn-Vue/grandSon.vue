<template>
  <div ref="child">
    孙组件
  </div>
</template>

<script>
export default {
  name: 'children',
  props: {
    a: String,
  },

  mounted() {
  },
};
</script>

<style>
</style>
