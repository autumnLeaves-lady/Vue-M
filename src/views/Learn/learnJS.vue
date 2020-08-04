<template>
  <div class="message">
    <el-button @click="event">sss</el-button>
  </div>

</template>

<script>
export default {
  mounted() {

  },
  methods: {
    event() {
      const time = new Date();
      const result = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
      console.log('result: ', result);
    },
  },
};
</script>

<style lang="scss">
.message{
  background-color: rgb(185, 245, 179);

}
</style>
