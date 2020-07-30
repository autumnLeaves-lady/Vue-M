export default {
  title: {
    text: '折线图堆叠', // 主标题文本
  },
  tooltip: { // 全局提示框组件。
    trigger: 'axis',
  },
  legend: { // 图例组件
    // 图例的数据数组，若没设置，则自动从series的name里取
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
  },
  grid: {
    left: '3%', // grid 组件离容器左侧的距离。
    right: '4%', // grid 组件离容器右侧的距离。
    bottom: '3%', // grid 组件离容器下侧的距离。
    containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
  },
  toolbox: { // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    feature: { // 各工具配置项。
      saveAsImage: {}, // 保存为图片。
      magicType: {
        type: ['line', 'bar', 'stack'],
      },
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, // 在刻度上
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '邮件营销', // 系列名称，用于tooltip的显示
      type: 'line',
      // stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '联盟广告',
      type: 'line',
      // stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '视频广告',
      type: 'line',
      // stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: '直接访问',
      type: 'line',
      // stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: '搜索引擎',
      type: 'line',
      // stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};
