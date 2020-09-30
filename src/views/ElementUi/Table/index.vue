<template>
  <div class="Table">

    <el-table
      :data="tableData"
      style="width: 100%"
      border
      max-height="500"
    >
      <el-table-column
        v-for="item in columns"
        :key="item.key"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import initData from './data';

export default {
  name: 'HelloWorld',

  data: initData,

  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Table {
  background-color: rgb(36, 143, 120);
  width: 80%;
  margin: 100px auto;
  padding: 100px;
}
.el-table {
  .warning-row {
    background:orange;
  }
  .success-row {
    background: yellowgreen;
  }
}
</style>
