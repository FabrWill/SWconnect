import Vue from 'vue'
import Router from 'vue-router'

// importacao de component
import Homepage from './components/homepage/Homepage.vue'


Vue.use(Router)

const routes = [
  {path: '/', name: 'home', component: Homepage}
]

export default new Router({
  routes
})

/*
* Router
* servico de rotas da aplicacao
* utiliza das seguintes rotas
*
* /         - pagina inicial
* /search   - pesquisa
*
*/
