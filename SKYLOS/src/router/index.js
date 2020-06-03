import Vue from 'vue';
import VueRouter from 'vue-router';
import Cadastro from '../components/cadastro/cadastro.vue';
import Inicial_cliente from '../components/inicial_cliente/inicial_cliente.vue';
import Login from '../components/login/login.vue';
import Inicial_cuidador from '../components/inicial_cuidador/inicial_cuidador.vue';
import Home from '../components/home/home.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/inicial_cliente',
      name: 'Inicial Cliente',
      component: Inicial_cliente,
    },
    {
      path: '/inicial_cuidador',
      name: 'Inicial Cuidador',
      component: Inicial_cuidador,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
    
  ];

  const router = new VueRouter({
    mode: 'history',
    routes,
  });
  
  export default router;