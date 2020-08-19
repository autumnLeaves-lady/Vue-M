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
  path: '/input',
  name: 'Input',
  component: () => import('@/views/ElementUi/input.vue'),
},
{
  path: '/select',
  name: 'Select',
  component: () => import('@/views/ElementUi/select.vue'),
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
  component: () => import('@/views/ElementUi/table.vue'),
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
  component: () => import('@/views/Learn/learnJS.vue'),
},
{
  path: '/learnVue',
  name: 'LearnVue',
  component: () => import('@/views/Learn/learnVue.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
