import Vue from 'vue'
import App from './App.vue'
import cadastro from './cadastro/cadastro.vue'
import login from './login/login.vue'
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

new Vue({
  el: '#login',
  render: h => h(login)
})
