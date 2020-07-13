<template>
  <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      }],
    };
  },
  methods: {
    arraySpanMethod({
      row, column, rowIndex, columnIndex,
    }) {
      console.log('row: ', row);
      console.log('column: ', column);
      if (rowIndex % 2 === 0) { // 偶数行
        if (columnIndex === 0) { // 合并偶数行的两行一列
          return {
            rowspan: 2,
            colspan: 1,
          };
        }
      } else { // 奇数行
        if (columnIndex === 0) { // 消除奇数行的第一列
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
        if (columnIndex === 1) { // 合并奇数行的2、3列
          return {
            rowspan: 1,
            colspan: 2,
          };
        }
        if (columnIndex === 2) { // 消除奇数行的第3列
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
      return [1, 1];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
