const data = [{
  name: 'Apples', // 数据项名称。
  value: 70, // 数据值。
}, {
  name: 'Strawberries',
  value: 68,
}, {
  name: 'Bananas',
  value: 48,
}, {
  name: 'Oranges',
  value: 40,
}, {
  name: 'Pears',
  value: 32,
}, {
  name: 'Pineapples',
  value: 27,
}, {
  name: 'Grapes',
  value: 18,
}];
export default {
  title: [{
    text: '圆饼图', // 标题
  }, {
    subtext: 'alignTo: "none" (default)', // 副标题文本
    left: '16.67%',
    top: '75%',
    textAlign: 'center',
  }, {
    subtext: 'alignTo: "labelLine"',
    left: '50%',
    top: '75%',
    textAlign: 'center',
  }, {
    subtext: 'alignTo: "edge"',
    left: '83.33%',
    top: '75%',
    textAlign: 'center',
  }],
  series: [{
    type: 'pie',
    radius: '25%', // 饼图的半径,string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
    center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
    data,
    animation: false, // 是否开启动画。
    label: { // 饼图图形上的文本标签
      position: 'outer', // 标签的位置:饼图扇区外侧
      alignTo: 'none', // 标签的对齐方式，仅当 position 值为 'outer' 时有效,'none'（默认值）：label line 的长度为固定值
      bleedMargin: 5, // 文字的出血线大小，超过出血线的文字将被裁剪为 '...'
    },
    left: 0,
    right: '66.6667%',
    top: 0,
    bottom: 0,
  }, {
    type: 'pie',
    radius: '25%',
    center: ['50%', '50%'],
    data,
    animation: false,
    label: {
      position: 'outer',
      alignTo: 'labelLine', // 'labelLine'：label line 的末端对齐
      bleedMargin: 5,
    },
    left: '33.3333%',
    right: '33.3333%',
    top: 0,
    bottom: 0,
  }, {
    type: 'pie',
    radius: '25%',
    center: ['50%', '50%'],
    data,
    animation: false,
    label: {
      position: 'outer',
      alignTo: 'edge', // 'edge'：文字对齐，文字的边距由 label.margin 决定。
      margin: 20,
    },
    left: '66.6667%',
    right: 0,
    top: 0,
    bottom: 0,
  }],
};
