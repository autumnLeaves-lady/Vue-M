import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/input',
  name: 'Input',
  component: () => import('../views/input.vue'),
},
{
  path: '/select',
  name: 'Select',
  component: () => import('../views/select.vue'),
},
{
  path: '/step',
  name: 'Step',
  component: () => import('../views/step.vue'),
},
{
  path: '/table',
  name: 'Table',
  component: () => import('../views/table.vue'),
},
{
  path: '/heartRate',
  name: 'HeartRate',
  component: () => import('../views/EChart/heartRate.vue'),
}, {
  path: '/lineChart',
  name: 'LineChart',
  component: () => import('../views/EChart/lineChart/index'),
}, {
  path: '/barChart',
  name: 'BarChart',
  component: () => import('../views/EChart/barChart/index'),
}, {
  path: '/pieChart',
  name: 'PieChart',
  component: () => import('../views/EChart/pieChart/index'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
