<template>
  <div class="echat">
    <div
      id="blood"
      class="e"
    >www</div>
  </div>

</template>

<script>
export default {
  name: 'echarts',
  data() {
    return {
      bloodOption: {
        title: {
          text: '血压监测波形图',
          left: 'center',
        },
        grid: {
          left: 40,
          top: 30,
          right: 10,
          bottom: 20,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [70, 80, 78, 56, 73, 83, 69],
          type: 'line',
          smooth: true,
        }],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const ele1 = document.getElementById('blood');
      this.myChart = this.$echarts.init(ele1);
      const dataObj = {
        legendData: ['动态曲线'],
        yAxisName: '次',
        categories: [],
        wangge: [],
        yAxisData: [],
      };
      dataObj.categories = this.categories();// 横坐标列表
      dataObj.wangge = this.wangge();// (60)[100,100,...]
      dataObj.yAxisData = this.yAxisData();// (60)['','',...]
      this.anlysis(this.myChart, dataObj); // 初始化绘图
      this.Interval(this.myChart, dataObj); // 定时器先代替socket
    },
    // 获取横坐标的60个时间列表
    categories() {
      let now = new Date();
      const res = [];
      let len = 60;
      while (len > 0) {
        const m = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const t = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        const time = `${now.getHours()}:${m}:${t}`;
        res.unshift(time);
        now = new Date(now - 1000);
        len -= 1;
      }
      return res;
    },
    // 获取柱状图的60个初始数据，都是100
    wangge() {
      const res = [];
      let len = 60;
      while (len > 0) {
        res.push(100);
        len -= 1;
      }
      return res;
    },
    // 获取折线图的60个初始数据，都是''
    yAxisData() {
      const res = [];
      let len = 0;
      while (len < 60) {
        res.push('');
        len += 1;
      }
      return res;
    },
    // 初始化绘图
    anlysis(chartObj, dataArray) {
      const option = {
        title: {
          show: false,
        },
        grid: {
          top: '12%',
          left: '10px',
          right: '10px',
          bottom: '2%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            if (params[0].data !== '') {
              const s = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[0].color}"></span>${params[0].seriesName}：${params[0].data}`;
              return s;
            }
            return '';
          },
        },
        legend: {
          data: dataArray.legendData,
          textStyle: {
            color: '#555',
          },
          top: '10',
          right: '20',
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            lineStyle: { color: '#dfdfdf' }, // x轴坐标轴颜色
          },
          axisTick: {
            lineStyle: { color: '#dfdfdf' }, // x轴刻度的颜色
          },
          axisLabel: {
            color: '#555', // 横坐标文字颜色
            rotate: '20',
            interval: 6,
            formatter(value) {
              let res = value;
              if (res.length > 10) {
                res = `${res.substring(0, 9)}..`;
              }
              return res;
            },
          },
          data: dataArray.categories,
        },
        {
          type: 'category',
          boundaryGap: true,
          axisLine: {
            lineStyle: { color: '#dfdfdf' }, // x轴坐标轴颜色
          },
          axisTick: {
            lineStyle: { color: '#dfdfdf' }, // x轴刻度的颜色
          },
          data: dataArray.categories,
          show: false,
        },
        ],
        yAxis: [{
          type: 'value',
          scale: true,
          name: dataArray.yAxisName,
          min: 0,
          boundaryGap: [0.1, 0.2],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#007fff', // 纵坐标刻度横线的颜色
            },
          },
          axisLabel: {
            color: '#555', // 纵坐标文字颜色
          },
          axisLine: {
            lineStyle: { color: '#555' }, // 纵坐标名称颜色
            // show:false
          },
          axisTick: {
            lineStyle: { color: '#007fff' }, // 纵坐标刻度短线的颜色
          },
        },
        {
          type: 'value',
          scale: true,
          // name: '模拟网格',
          max: 100,
          min: 0,
          boundaryGap: 0,
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            lineStyle: { color: '#007fff' }, // y轴坐标轴颜色
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{ // 网格
          // name: dataArray.legendData,
          type: 'bar', // 柱状
          xAxisIndex: 1,
          yAxisIndex: 1,
          barGap: '-100%', // 不同系列的柱间距离,此时表示两个坐标系重合，没有间距
          barCategoryGap: '0%', // 每个柱子之间的距离，设置为0，柱子之间没有间隙，网格就出来了
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
              borderRightWidth: '1',
              borderColor: '#007fff',
            },
          },
          data: dataArray.wangge,
        },
        {
          name: dataArray.legendData,
          type: 'line', // 折线
          smooth: true, // 折线平滑参数
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 0,
          itemStyle: {
            normal: {
              color: '#f74df6',
            },
          },
          lineStyle: {
            shadowColor: '#f74df6',
            shadowBlur: 8,
            shadowOffsetX: '3',
            shadowOffsetY: '4',
          },
          markPoint: {
            data: [{
              name: '峰值',
              type: 'max',
              label: {
                normal: {
                  position: 'top',
                  formatter(params) {
                    const xAxisCategories = dataArray.categories[params.data.coord[0]];// 坐标点获取x轴类目名称
                    return `${params.name}:${params.value}次（${xAxisCategories}）`;
                  },
                  background: '#ddd',
                },
              },
            }],
            symbol: 'pin',
            symbolSize: 15,
            symbolOffset: [0, -6],
          },
          data: dataArray.yAxisData,
          animationDurationUpdate(idx) {
            return idx * 100;
          },
        },
        ],
        animationEasing: 'exponentialOut',
        animationEasingUpdate: 'exponentialOut',
      };

      chartObj.hideLoading();
      chartObj.setOption(option);
    },
    // 定时器先代替socket
    Interval(myChart, dataObj) {
      setInterval(() => {
        // 获取此时的时间 hh:mm:ss
        const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        // 模拟网格：更换柱状图的纵坐标数据，都是100
        dataObj.wangge.shift();
        dataObj.wangge.push(100);
        // 更换折线的纵坐标数据
        dataObj.yAxisData.shift();
        dataObj.yAxisData.push(Math.round(Math.random() * 10));
        // 更换纵坐标文字
        dataObj.categories.shift();
        dataObj.categories.push(axisData);
        const option = {
          xAxis: [{
            data: dataObj.categories,
          }, {
            data: dataObj.categories,
          }],
          series: [{
            data: dataObj.wangge,
          }, {
            data: dataObj.yAxisData,
          }],
        };
        myChart.setOption(option);
      }, 1000);
    },
  },

};
</script>

<style lang="scss">
.echat {
  // width: 400px;
  // height: 400px;
  .e {
    width: 600px;
    height: 400px;
  }
}
</style>
