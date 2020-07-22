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
      // this.myChart.setOption(this.bloodOption);
      const dataObj = {
        categories: [],
        legendData: ['动态曲线'],
        yAxisData: [],
        yAxisName: '次',
        wangge: [],
      };
      dataObj.categories = (function () {
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
      }());
      dataObj.wangge = (function () {
        const res = [];
        let len = 60;
        while (len > 0) {
          res.push(100);
          len -= 1;
        }
        return res;
      }());
      dataObj.yAxisData = (function () {
        const res = [];
        let len = 0;
        while (len < 60) {
          res.push('');
          len += 1;
        }
        return res;
      }());

      this.anlysis(this.myChart, dataObj); // 初始化绘图
      setInterval(() => {
        const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        const data0 = dataObj.wangge;// 模拟网格
        const data1 = dataObj.yAxisData;
        data0.shift();
        data0.push(100);
        data1.shift();
        data1.push(Math.round(Math.random() * 10));

        dataObj.categories.shift();
        dataObj.categories.push(axisData);

        this.myChart.setOption({
          xAxis: [{
            data: dataObj.categories,
          }, {
            data: dataObj.categories,
          }],
          series: [{
            data: data0,
          }, {
            data: data1,
          }],
        });
      }, 1000);
    },
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
            color: '#555',
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
              color: '#007fff',
            },
          },
          axisLabel: {
            color: '#555',
          },
          axisLine: {
            lineStyle: { color: '#555' },
            // show:false
          },
          axisTick: {
            lineStyle: { color: '#007fff' },
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
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          barGap: '-100%',
          barCategoryGap: '0%',
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
          type: 'line',
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
