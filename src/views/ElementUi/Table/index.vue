<template>
  <div>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%"
      :span-method="arraySpanMethod"
      border
    >
      <el-table-column
        v-for="item in columns"
        :key="item.key"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template v-if="item.children && (item.children.length > 0)">
          <el-table-column
            v-for="el in item.children"
            :key="el.key"
            :prop="el.prop"
            :label="el.label"
            :width="el.width"
            :fixed="el.fixed || false"
          >
          </el-table-column>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="handleDownload">导出3</el-button>
  </div>

</template>

<script>
import Excel from '@/utils/exportExcel';
import initData from './data';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: initData,
  mounted() {
    console.log(Excel);
  },
  methods: {
    handleDownload() {
      import('@/utils/exportExcel').then((excel) => {
        const param = {
          columns: this.columns,
          tableData: this.tableData,
          filename: '文件名称',
        };
        excel.exportToExcel(param);
      });
    },
    /**
     * @description 合并
     * @param {}
     */
    /* eslint-disable */
    arraySpanMethod({
      row, column, rowIndex, columnIndex,
    }) {
      if (rowIndex % 2 === 0) { // 偶数列进行合并操作
        if (columnIndex === 0) { // 第一列
          return [1, 2]; // 行：合并一行，列： 合并二列
        }

        if (columnIndex === 1) { // 第二列（消除）
          return [0, 0]; // 行： 合并0行，列： 合并0列
        }
      }

      return [1, 1]; // 奇数列不合并
    },

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
