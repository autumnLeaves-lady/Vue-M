<template>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      column-key="date"
      :filters="[
        {text: '05-01', value: '2016-05-01'}, //回显页面的是text，value用于点击筛选回调filter-method函数里获取到的值
        {text: '05-02', value: '2016-05-02'},
        {text: '05-03', value: '2016-05-03'},
        {text: '05-04', value: '2016-05-04'}
      ]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter"
    >
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
    >
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          disable-transitions
        >{{scope.row.tag}}</el-tag>
      </template>
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
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司',
      }],
    };
  },
  methods: {

    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    /**
    * @description 描述
    * @param {Object} row 一行数据信息
    * @param {Object} column 列配置的信息
    * @param {Object} cellValue 单元格内容
    * @param {number} index 数据索引
    */
    formatter(row) {
      return `${row.address}11111`;
    },
    filterTag(value, row) {
      console.log('value, row: ', value, row);

      return row.tag === value;
    },
    /**
     * 点击筛选时触发
     * @param {string} value 选择的filters选项里的value值 "2016-05-01"
     * @param {object} row 一行数据 {address: "上海...",date: "2016-05-01",name: "王小虎",tag: "家"}
     * @param {object} column 属性 {label:'日期',property:"date"}
    */
    filterHandler(value, row, column) {
      const { property } = column;
      return row[property] === value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

</style>
