export default () => ({
  // 表头
  columns: [{
    key: '1',
    prop: 'date',
    label: '日期',
  }, {
    key: '2',
    prop: 'name',
    label: '姓名',
  }, {
    key: '3',
    prop: 'address',
    label: '地址',
    children: [
      {
        key: '3-1',
        prop: 'province',
        label: '市',
      },
      {
        key: '3-2',
        prop: 'city',
        label: '区',
      },
      {
        key: '3-3',
        prop: 'address',
        label: '详细地址',
      },
    ],
  }],
  // 表格数据
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
  }],
  merges: ['A1:A2', 'B1:B2', 'C1:E1'],
});
