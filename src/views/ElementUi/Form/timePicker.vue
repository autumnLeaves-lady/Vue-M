<template>
  <div>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="选择月"
      value-format="yyyy-M"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: '',
    };
  },
  updated() {
    console.log('value2: ', this.value2);
  },

};
</script>

<style>
</style>
