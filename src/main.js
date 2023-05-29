import Vue from 'vue';
import App from '@/App.vue';
// import { helloVue, helloWorld } from './constants';
// import SayHello from './utils';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

// SayHello(helloVue);
// SayHello(helloWorld);
