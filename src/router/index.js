import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/form/',
  name: 'Form',
  component: () => import('@/views/ElementUi/Form/index.vue'),
  children: [
    {
      path: 'radio',
      component: () => import('@/views/ElementUi/Form/radio.vue'),
    },
    {
      path: 'checkbox',
      component: () => import('@/views/ElementUi/Form/checkbox.vue'),
    },
    {
      path: 'input',
      component: () => import('@/views/ElementUi/Form/input.vue'),
    },
    {
      path: 'inputNumber',
      component: () => import('@/views/ElementUi/Form/inputNumber.vue'),
    },
    {
      path: 'select',
      component: () => import('@/views/ElementUi/Form/select.vue'),
    },
    {
      path: 'cascader',
      component: () => import('@/views/ElementUi/Form/cascader.vue'),
    },
    {
      path: 'switch',
      component: () => import('@/views/ElementUi/Form/switch.vue'),
    },
    {
      path: 'slider',
      component: () => import('@/views/ElementUi/Form/slider.vue'),
    },
    {
      path: 'timePicker',
      component: () => import('@/views/ElementUi/Form/timePicker.vue'),
    },
    {
      path: 'datePicker',
      component: () => import('@/views/ElementUi/Form/datePicker.vue'),
    },
    {
      path: 'dateTimePicker',
      component: () => import('@/views/ElementUi/Form/dateTimePicker.vue'),
    },
    {
      path: 'upload',
      component: () => import('@/views/ElementUi/Form/upload.vue'),
    },
    {
      path: 'rate',
      component: () => import('@/views/ElementUi/Form/rate.vue'),
    },
    {
      path: 'colorPicker',
      component: () => import('@/views/ElementUi/Form/colorPicker.vue'),
    },
    {
      path: 'transfer',
      component: () => import('@/views/ElementUi/Form/transfer.vue'),
    },
    {
      path: 'form',
      component: () => import('@/views/ElementUi/Form/form.vue'),
    },
  ],
},
{
  path: '/step',
  name: 'Step',
  component: () => import('@/views/ElementUi/step.vue'),
},
{
  path: '/common',
  name: 'Common',
  component: () => import('@/views/ElementUi/common.vue'),
},
{
  path: '/table',
  name: 'Table',
  component: () => import('@/views/ElementUi/Table/index.vue'),
},
{
  path: '/heartRate',
  name: 'HeartRate',
  component: () => import('@/views/EChart/heartRate.vue'),
}, {
  path: '/lineChart',
  name: 'LineChart',
  component: () => import('@/views/EChart/lineChart/index'),
}, {
  path: '/barChart',
  name: 'BarChart',
  component: () => import('@/views/EChart/barChart/index'),
}, {
  path: '/pieChart',
  name: 'PieChart',
  component: () => import('@/views/EChart/pieChart/index'),
},
{
  path: '/learnJS',
  name: 'LearnJS',
  component: () => import('@/views/Learn-Vue/learnJS.vue'),
},
{
  path: '/learnVue',
  name: 'LearnVue',
  component: () => import('@/views/Learn-Vue/learnVue.vue'),
},
{
  path: '/cssLearn',
  name: 'CssLearn',
  component: () => import('@/views/Learn-css/learnCss.vue'),
},
{
  path: '/Bmap',
  name: 'Bmap',
  component: () => import('@/views/Bmap/index.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
