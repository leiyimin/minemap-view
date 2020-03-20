import Vue from 'vue';
import App from './App.vue';
import MapView from '../index';

Vue.config.productionTip = false;
Vue.use(MapView);
new Vue({
  render: h => h(App),
}).$mount('#app');
