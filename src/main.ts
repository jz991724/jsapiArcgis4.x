import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import esriConfig  from '@arcgis/core/config.js';
esriConfig.assetsPath = './assets';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
