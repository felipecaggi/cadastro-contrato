import Vue from 'vue'
import VueRouter from 'vue-router'
import Contrato from '../components/Contrato'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Contrato',
      component: Contrato
    }
  ]
})
