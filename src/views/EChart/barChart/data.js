const method = {
  // 获取柱状图横轴的数据（时间）(10个)
  getBarAxis() {
    let now = new Date();
    const res = [];
    for (let i = 0; i < 10; i += 1) {
      const nowStr = now.toLocaleTimeString().replace(/^\D*/, '');
      res.unshift(nowStr);
      now = new Date(now - 2000);
    }
    return res;
  },
  // 获取折线横轴的数据（数值）(10个)
  getLineAxis() {
    const res = [];
    for (let i = 0; i < 10; i += 1) {
      res.push(i);
    }
    return res;
  },
  // 获取柱状图的纵轴数据(10个)
  getBarData() {
    const res = [];
    for (let i = 0; i < 10; i += 1) {
      res.push(Math.round(Math.random() * 1000));// 0-1000（包含）之间的随机数
    }
    return res;
  },
  // 获取折线图的纵轴数据(10个)
  getLineData() {
    const res = [];
    for (let i = 0; i < 10; i += 1) {
      res.push((Math.random() * 10 + 5).toFixed(1) - 0);// 5-15之间的随机数，保留一位小数
    }
    return res;
  },
};

export default {
  title: {
    text: '动态数据', // 主标题文本
    subtext: '纯属虚构', // 副标题文本
  },
  tooltip: {
    trigger: 'axis', // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    axisPointer: { // 坐标轴指示器配置项。
      type: 'cross', // 'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
      label: { // 坐标轴指示器的文本标签。
        backgroundColor: 'blue', // 文本标签的背景颜色
      },
    },
  },
  legend: {
    // 图例的数据数 组。数组项通常为一个字符串，每一项代表一个系列的name
    data: ['最新成交价', '预购队列'],
  },
  // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
  toolbox: {
    show: true, // 是否显示工具栏组件。
    feature: { // 各工具配置项。
      // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
      dataView: { readOnly: false }, // 是否不可编辑（只读）。
      restore: {}, // 重置
      saveAsImage: {}, // 下载
    },
  },
  dataZoom: { // dataZoom 组件 用于区域缩放
    show: false,
    // 数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%.dataZoom-inside.start 和 dataZoom-inside.end 共同用 百分比 的形式定义了数据窗口范围。
    start: 0,
    end: 100,
  },
  xAxis: [// 两个横轴
    {
      type: 'category', // 'category' 类目轴，适用于离散的类目数据,可通过 xAxis.data 设置类目数据。
      boundaryGap: true, // 数据在刻度中间
      data: method.getBarAxis(), // 底部横轴数据（10个时间）
    },
    {
      type: 'category', // 'category' 类目轴，适用于离散的类目数据,可通过 xAxis.data 设置类目数据。
      boundaryGap: true, // 数据在刻度中间
      data: method.getLineAxis(), // 顶部横轴数据（10个数值）
    },
  ],
  yAxis: [// 两个纵轴
    { // 左边纵轴刻度数据
      type: 'value', // 坐标值类型，数值轴，用于连续数据
      scale: true, // 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。只在数值轴中（type: 'value'）有效。
      name: '价格',
      max: 30, // 坐标轴刻度最大值。
      min: 0, // 坐标轴刻度最小值。
      boundaryGap: [0.2, 0.2],
    },
    { // 右边纵轴刻度数据
      type: 'value',
      scale: true,
      name: '预购量',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2],
    },
  ],
  series: [
    {
      name: '预购队列',
      type: 'bar',
      xAxisIndex: 1, // 使用第二条横轴(顶部)
      yAxisIndex: 1, // 使用第二条纵轴（右边）
      data: method.getBarData(), // 0-1000（包含）之间的随机数
    },
    {
      name: '最新成交价',
      type: 'line',
      data: method.getLineData(), // 5-15之间的随机数，保留一位小数
    },
  ],
};
