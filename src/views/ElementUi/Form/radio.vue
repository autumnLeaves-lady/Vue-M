<template>
  <div>
    <el-radio-group v-model="radio" @change="change">
      <el-radio :label="1">备选项1</el-radio>
      <el-radio :label="2">备选项2</el-radio>
      <el-radio :label="3">备选项3</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 2,
    };
  },
  methods: {
    change(val) {
      console.log('val: ', val);
    },
  },

};
</script>

<style>

</style>
