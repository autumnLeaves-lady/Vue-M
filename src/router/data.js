export default [
  {
    value: 'Element UI',
    key: '1',
    icon: 'el-icon-location',
    children: [
      {
        value: 'form',
        key: '1-1',
        children: [{
          value: '选择框',
          key: '1-1-1',
          path: '/select',
        },
        {
          value: '输入框',
          key: '1-1-2',
          path: '/input',
        }],
      },
      {
        value: '表格',
        key: 'table',
        path: '/table',
      },
      {
        value: '步骤条',
        key: 'step',
        path: '/step',
      },
    ],
  },
  {
    value: 'eChart',
    key: 'eChart',
    children: [{
      value: '心率图',
      key: 'heartRate',
      path: '/heartRate',
    },
    {
      value: '折线图',
      key: 'lineChart',
      path: '/lineChart',
    },
    {
      value: '柱状图',
      key: 'barChart',
      path: '/barChart',
    },
    {
      value: '圆饼图',
      key: 'pieChart',
      path: '/pieChart',
    }],
  },
];
