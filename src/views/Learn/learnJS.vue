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
      const obj = null;
      const a = obj?.b?.c;
      console.log('a: ', a);
    },
  },
};
</script>

<style lang="scss">
.message{
  background-color: rgb(185, 245, 179);

}
</style>
