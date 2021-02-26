<template>
  <div class="message">
    <el-button @click="event">sss</el-button>
  </div>

</template>

<script>
/* eslint-disable */
import example from './data';

export default {
  mounted() {
    // console.log('example: ', example);
  },
  methods: {
    event() {
      let a = 10;
      let c = a--;
      console.log('a: ', a); // 9
      console.log('c: ', c); // 10

     
    },
  },
};
</script>

<style lang="scss">
.message {
  background-color: rgb(185, 245, 179);
}
</style>
