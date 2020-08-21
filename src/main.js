import Vue from 'vue';
import ElementUI, { Message } from 'element-ui';
import router from '@/router';
import echarts from 'echarts';
import App from './App.vue';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import './styles/reset.scss';

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.prototype.$message = Message;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
