<template>
  <div class="box">
    <el-select
      v-model="value"
      placeholder="请选择文章标签"
      multiple
      filterable
      allow-create
      default-first-option
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'select',
  data() {
    return {
      options: [{
        value: 'HTML',
        label: 'HTML',
      }, {
        value: 'CSS',
        label: 'CSS',
      }, {
        value: 'JavaScript',
        label: 'JavaScript',
      }],
      value: [],
    };
  },

};
</script>

<style lang="scss">
.box {
  background-color: rgb(231, 231, 160);
  padding: 40px;
}
</style>
