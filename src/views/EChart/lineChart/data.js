const bloodList = [];
const heartList = [{
  taskRecordTime: '2020-09-17 11:31:12',
  count: 31,
},
{
  taskRecordTime: '2020-09-17 11:40:15',
  count: 36,
},
{
  taskRecordTime: '2020-09-17 11:54:20',
  count: 35,
},
{
  taskRecordTime: '2020-09-17 12:31:25',
  count: 32,
},
];
function getData(data) {
  return data.map((item) => [item.taskRecordTime, item.count]);
}
console.log(getData(bloodList));
console.log(getData(heartList));

export default {
  tooltip: {
    trigger: 'axis',
  },
  legend: { // 图例组件
    data: ['心率', '血压'],
  },
  xAxis: [{
    type: 'time',
    // data: this.eChartData.map((val) => val.xAxis),
  }],
  yAxis: [{
    type: 'value',
  }],
  series: [{
    name: '心率',
    type: 'line',
    label: {
      normal: {
        show: true,
        position: 'top',
      },
    },
    data: getData(heartList),
  },
  {
    name: '血压',
    type: 'line',
    label: {
      normal: {
        show: true,
        position: 'top',
      },
    },
    data: getData(bloodList),
  },
  ],
};
