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
  path: '/about',
  name: 'About',
  component: () => import('../views/About.vue'),
},
{
  path: '/select',
  name: 'Select',
  component: () => import('../views/select.vue'),
},
{
  path: '/echart',
  name: 'Echart',
  component: () => import('../views/Echart.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
