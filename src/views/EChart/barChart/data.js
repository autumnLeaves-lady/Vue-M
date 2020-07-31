export default {
  title: {
    text: '柱状图',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['第一个柱状图'],
  },
  grid: {
    left: '0%', // grid 组件离容器左侧的距离。
    top: '0%', // ..........上侧......。
    right: '0%', // ..........右侧......。
    bottom: '0%', // ..........下侧......。
    containLabel: false, // grid 区域是否包含坐标轴的刻度标签。
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{
    data: [1, 4, 5, 6, 7, 9, 10],
    type: 'bar',
    name: '第一个柱状图',
  }],
};
