<template>
  <div class="form">
    <div class="title">
      <router-link
        class="link"
        v-for="item in data"
        :to="item.to"
        :key="item.to"
        active-class="router-link-active"
      >{{item.value}}</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          to: '/form/checkbox',
          value: 'Checkbox多选框',
        },
        {
          to: '/form/input',
          value: 'Input 输入框',
        },
        {
          to: '/form/inputNumber',
          value: 'InputNumber计数器',
        },
        {
          to: '/form/select',
          value: 'Select选择器',
        },
        {
          to: '/form/cascader',
          value: 'Cascader级联选择器',
        },
        {
          to: '/form/switch',
          value: 'Switch开关',
        },
        {
          to: '/form/slider',
          value: 'Slider滑块',
        },
        {
          to: '/form/timePicker',
          value: 'TimePicker 时间选择器',
        },
        {
          to: '/form/datePicker',
          value: 'DatePicker 日期选择器',
        },
        {
          to: '/form/dateTimePicker',
          value: 'DateTimePicker 日期时间选择器',
        },
        {
          to: '/form/upload',
          value: 'Upload 上传',
        },
        {
          to: '/form/rate',
          value: 'Rate 评分',
        },
        {
          to: '/form/colorPicker',
          value: 'ColorPicker 颜色选择器',
        },
        {
          to: '/form/transfer',
          value: 'Transfer 穿梭框',
        },
        {
          to: '/form/form',
          value: 'Form 表单',
        },
      ],
    };
  },

};
</script>

<style  lang="scss" scoped>
.form {
  .title {
    overflow: auto;
    white-space: nowrap;
    width: 100%;
    .link {
      margin-right: 10px;
      font-size: 12px;
      color: #000;
    }
    .router-link-active {
      color: rgb(31, 136, 206);
      font-weight: bold;
    }
  }
  .view{
    margin-top: 20px;
  }
}
</style>
