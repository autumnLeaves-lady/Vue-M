export default [
  {
    value: 'Element UI',
    key: '1',
    icon: 'el-icon-location',
    children: [
      {
        value: 'form-表单',
        key: '1-1',
        path: '/form',
      },
      {
        value: 'table-表格',
        key: 'table',
        path: '/table',
      },
      {
        value: 'step-步骤条',
        key: 'step',
        path: '/step',
      },
      {
        value: 'tree-树',
        key: 'tree',
        path: '/tree',
      },
      {
        value: '临时随机',
        key: 'common',
        path: '/common',
      },
    ],
  },
  {
    value: 'eChart',
    key: 'eChart',
    icon: 'el-icon-location',
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
  {
    value: 'Learn Vue',
    key: 'learnVue',
    icon: 'el-icon-location',
    children: [{
      value: 'js学习',
      key: 'learnJS',
      path: '/learnJS',
    },
    {
      value: 'Vue学习',
      key: 'learnVue',
      path: '/learnVue',
    },
    ],
  },
  {
    value: 'CSS',
    key: 'css',
    icon: 'el-icon-location',
    children: [{
      value: 'css学习',
      key: 'cssLearn',
      path: '/cssLearn',
    },
    ],
  },
  {
    value: '百度地图',
    key: 'map',
    icon: 'el-icon-location',
    path: '/Bmap',
  },
];
