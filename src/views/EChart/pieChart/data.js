export default {
  title: [{
    text: '圆饼图', // 标题
  }],
  series: [{
    type: 'pie',
    radius: '50%', // 饼图的半径,string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
    center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
    data: [
      { name: '周一', value: 70 },
      { name: '周二', value: 68 },
      { name: '周三', value: 48 },
      { name: '周四', value: 40 },
      { name: '周五', value: 32 },
      { name: '周六', value: 27 },
      { name: '周天', value: 18 }],
    animation: false, // 是否开启动画。
    label: { // 饼图图形上的文本标签
      position: 'outer', // 标签的位置:饼图扇区外侧
      alignTo: 'none', // 标签的对齐方式，仅当 position 值为 'outer' 时有效,'none'（默认值）：label line 的长度为固定值
      bleedMargin: 5, // 文字的出血线大小，超过出血线的文字将被裁剪,当 label.position 为 'outer' 并且 label.alignTo 为 'none' 或 'labelLine' 的情况有效。为 '...'
    },
    left: 0,
    right: '66.6667%',
    top: 0,
    bottom: 0,
  }],
};
