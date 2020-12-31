<template>
  <div class="message">
    <el-button @click="event">sss</el-button>
  </div>

</template>

<script>
import example from './data';

export default {
  mounted() {
    console.log('example: ', example);
  },
  methods: {
    event() {

    },
  },
};
</script>

<style lang="scss">
.message {
  background-color: rgb(185, 245, 179);
}
</style>
