import Vue from 'vue'
import App from './App.vue'
import cadastro from './cadastro.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#cadastro',
  render: h => h(cadastro)
})
