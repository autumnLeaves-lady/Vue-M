<template>
  <div>
    <el-input-number
      v-model="num"
      :precision="2"
      :step="0.01"
      :max="10"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
    };
  },
};
</script>

<style>
</style>
