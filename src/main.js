import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import VueRouter from 'vue-router';

import MultiLanguage from 'vue-multilanguage'
import {enMessages} from './languages/en-english';
import {esMessages} from './languages/es-spanish';
import {ptMessages} from './languages/pt-portuguese';

Vue.use(MultiLanguage, {
  default: 'es',
  
	es: esMessages,
  en: enMessages,
	pt: ptMessages,
});
Vue.use(Buefy);
Vue.use(VueRouter);

import opcionlista from './components/opcionListaRouter.vue';
import opcionedit from './components/opcionEditRouter.vue';

import opcionlistarouter from './components/opcionLista.vue';
import opcioneditrouter from './components/opcionEdit.vue';

const routes = [

    { path: '/', name: "inicio" },

    { path: '/opcionrouter', name: "opcionlistarouter", component: opcionlistarouter },

    { path: '/opcion', name: "opcionlista", component: opcionlista, children: [

        { path: 'edit:codigo', name: "opcionedit", component: opcionedit, props: true },

    ] },
 
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
