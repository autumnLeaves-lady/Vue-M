<template>
  <div
    id="map"
    class="baidu-map"
  ></div>
</template>

<script>
import BMapGL from 'BMap';
/* eslint-disable-next-line */
import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';

export default {
  name: 'Bmap', // 地图
  data() {
    return {
      dataList: [
        {
          longitude: 113.04024065172206,
          latitude: 28.361108433984633,
        },
        {
          longitude: 113.04196539830065,
          latitude: 28.21249855582633,
        },
        {
          longitude: 113.2759560174624,
          latitude: 28.367719750464275,
        },
      ],
    };
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    /**
     * 加载百度地图
     */
    baiduMap() {
      // 1.创建Map实例
      const map = new BMapGL.Map('map');

      // 2.初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMapGL.Point(113.09572, 28.22784), 12);

      // 3.开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);

      // 可以在地图加载完成的回调里执行其他的操作
      map.addEventListener('tilesloaded', () => {
        this.addPoint(map);
      });
    },
    /**
     * 添加点标记,点击弹出信息窗
     */
    addPoint(map) {
      this.dataList.forEach((item) => {
        // 创建点标记
        const point = new BMapGL.Point(item.longitude, item.latitude);
        const marker = new BMapGL.Marker(point);
        // 在地图上添加点标记
        map.addOverlay(marker);

        // 创建信息窗口
        const opts = {
          width: 200,
          height: 100,
          title: '长沙市哦',
        };
        const infoWindow = new BMapGL.InfoWindow('提示：这是点击点标注后弹出的窗口', opts);

        // 给点击标记添加点击事件，回调里开启信息窗口
        marker.addEventListener('click', () => {
          map.openInfoWindow(infoWindow, point); // 开启信息窗口
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.baidu-map {
  height: 100%;
  width: 100%;
}
</style>
