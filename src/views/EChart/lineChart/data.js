export default {
  title: {
    text: '折线图',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{
    data: [2, 4, 5, 6, 7, 9, 10],
    type: 'line',
    name: '第一个折线图',
  }],
};
