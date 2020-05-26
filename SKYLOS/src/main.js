import Vue from 'vue'
import App from './App.vue'
import cadastro from './cadastro/cadastro.vue'
import login from './login/login.vue'
import inicial_cliente from './inicial_cliente/inicial_cliente.vue'
import inicial_cuidador from './inicial_cuidador/inicial_cuidador.vue'
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

new Vue({
  el: '#inicial_cliente',
  render: h => h(inicial_cliente)
})

new Vue({
  el: '#inicial_cuidador',
  render: h =>h(inicial_cuidador)
})
