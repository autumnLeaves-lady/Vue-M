<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      value-format="yyyy-MM-dd HH-mm-ss"
      placeholder="选择日期时间"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
    };
  },
  watch: {
    value1(val) {
      console.log('val: ', [val]);
    },
  },

};
</script>

<style>
</style>
