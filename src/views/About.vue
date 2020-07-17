<template>
  <div class="about">
    <el-autocomplete
      class="inline-input"
      v-model="input"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      restaurants: [],
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    /**
    * @description 每次聚焦时执行，输入值变化后，防抖延时执行（注意选择时不执行）
    * @param {array} queryString 输入框的内容
    * @param {function} cb 回调函数，返回出要显示在输入框的内容
    */
    querySearch(queryString, cb) {
      console.log('queryString: ', [queryString]);
      console.log('cb: ', cb);
      const { restaurants } = this;
      const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      // 返回的函数时上面filter里的回调函数
      // 输入内容必须在准备的列表里，且是从开头第一个字符匹配
      return (restaurant) => (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    },
    loadAll() {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
        { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路1685号' },
        { value: '茶芝兰（奶茶，手抓饼）', address: '上海市普陀区同普路1435号' },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },

};
</script>

<style lang="scss">
.about {
  background-color: wheat;
  width: 400px;
  padding: 20px;
  .line {
    padding: 10px 0;
  }
}
</style>
