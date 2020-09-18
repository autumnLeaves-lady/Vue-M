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
    <el-button @click="json2Excel">导出</el-button>
    <el-button @click="event">导出2</el-button>
    <el-button @click="handleDownload">导出3</el-button>
  </div>

</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   tag: '家',
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄',
      //   tag: '公司',
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄',
      //   tag: '家',
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄',
      //   tag: '公司',
      // }],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }],
    };
  },
  methods: {
    // ------------------------------------------------------------------------------------------------------------------
    json2Excel() {
      const wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary',
      };
      const workBook = {
        SheetNames: ['Sheet1'],
        Sheets: {},
        Props: {
          Title: 'Insert Title Here',
        },
      };
      // 1、XLSX.utils.json_to_sheet(data) 接收一个对象数组并返回一个基于对象关键字自动生成的“标题”的工作表，默认的列顺序由使用Object.keys的字段的第一次出现确定
      // 2、将数据放入对象workBook的Sheets中等待输出
      const dataSource = [
        {
          部门: '统计报表', 人数: 1, 姓名: '20', 身高: '1222', 其他: 'sss',
        },
        {
          部门: '行政部', 人数: 1, 姓名: '20', 身高: '1222',
        },
        {
          部门: '技术部', 人数: 2, 姓名: '20', 身高: '1222',
        },
        {
          部门: '行政部', 人数: 3, 姓名: '20', 身高: '1222',
        },
        {
          部门: '技术部', 人数: 4, 姓名: '20', 身高: '1222',
        },
        {
          部门: '行政部', 人数: 5, 姓名: '20', 身高: '1222',
        },
        {
          部门: '技术部', 人数: 6, 姓名: '20', 身高: '1222',
        },
        {
          部门: '行政部', 人数: 7, 姓名: '20', 身高: '1222',
        },
        {
          部门: '技术部', 人数: 8, 姓名: '20', 身高: '1222',
        },
      ];

      workBook.Sheets.Sheet1 = XLSX.utils.json_to_sheet(dataSource);
      workBook.Sheets.Sheet1['!merges'] = [
        {
          s: { c: 0, r: 7 }, // 合并开始位置
          e: { c: 0, r: 9 }, // 合并结束位置 c:列位置 r:表示行位置
        },
      ];

      // 3、XLSX.write() 开始编写Excel表格
      // 4、changeData() 将数据处理成需要输出的格式
      const buf = this.changeData(XLSX.write(workBook, wopts));

      this.saveAs(new Blob([buf], { type: 'application/octet-stream' }));
    },
    changeData(s) {
      // 如果存在ArrayBuffer对象(es6) 最好采用该对象
      if (typeof ArrayBuffer !== 'undefined') {
        // 1、创建一个字节长度为s.length的内存区域
        const buf = new ArrayBuffer(s.length);

        // 2、创建一个指向buf的Unit8视图，开始于字节0，直到缓冲区的末尾
        const view = new Uint8Array(buf);

        // 3、返回指定位置的字符的Unicode编码
        for (let i = 0; i !== s.length; i += 1) view[i] = s.charCodeAt(i);
        return buf;
      }
      const buf = new Array(s.length);
      for (let i = 0; i !== s.length; i += 1) buf[i] = s.charCodeAt(i);
      return buf;
    },
    saveAs(obj, fileName) { // 当然可以自定义简单的下载文件实现方式
      const tmpa = document.createElement('a');
      tmpa.download = fileName ? `${fileName}.xlsx` : `${new Date().getTime()}.xlsx`;
      tmpa.href = URL.createObjectURL(obj); // 绑定a标签
      tmpa.click(); // 模拟点击实现下载

      setTimeout(() => { // 延时释放
        URL.revokeObjectURL(obj); // 用URL.revokeObjectURL()来释放这个object URL
      }, 100);
    },
    event() {
      const aoa = [
        ['主要信息', 'AA', 'BB', '其它信息'], // 特别注意合并的地方后面预留2个null
        ['姓名', '性别', '年龄', '注册时间'],
        ['张三', '男', 18, new Date()],
        ['李四', '女', 22, new Date()],
      ];
      const wsName = 'Sheet1';
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      ws['!merges'] = [
        // 设置A1-C1的单元格合并
        { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } },
      ];

      // 控制单元格宽度
      ws['!cols'] = [{
        wpx: 70,
      }, {
        wpx: 70,
      }, {
        wpx: 70,
      }, {
        wpx: 70,
      }, {
        wpx: 150,
      }, {
        wpx: 120,
      }]; // 单元格列宽
      const filename = '导出单元格带样式的表格.xlsx';
      // Excel第一个sheet的名称
      XLSX.utils.book_append_sheet(wb, ws, wsName); // 将数据添加到工作薄
      XLSX.writeFile(wb, filename); // 导出Excel
    },

    // ---------------------------------------------------------------------------------------------------------------
    handleDownload() {
      import('../../vendor/Export2Excel').then((excel) => {
        const multiHeader = [
          ['日期', '配送信息', '', '', '', ''], // 第一行
          ['', '姓名', '地址', '', '', ''], // 第二行
        ]; // 前两行的表头数据，二维数组，不够的用空白补全
        const header = ['', '', '省份', '市区', '地址', '邮编']; // 最后一行的表头数据
        const filterVal = ['date', 'name', 'province', 'city', 'address', 'zip'];
        const merges = ['A1:A3', 'A5:A7', 'B1:F1', 'B2:B3', 'C2:F2'];
        excel.exportJsonToExcel({
          multiHeader,
          header,
          filterVal,
          tableData: this.tableData,
          merges,
        });
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
