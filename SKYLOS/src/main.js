import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill";
import axios from 'axios'; import VueAxios from 'vue-axios';
import router from './router';
import VueSession from 'vue-session';

Vue.use(VueSession);

Vue.use(VueAxios, axios);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
