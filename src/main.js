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

import opcionlista from './components/opcionLista.vue';
import opcionedit from './components/opcionEdit.vue';

import opcionlistarouter from './components/opcionListaRouter.vue';
import opcioneditrouter from './components/opcionEditRouter.vue';

const routes = [

    { path: '/', name: "inicio" },

    { path: '/opcion', name: "opcionlista", component: opcionlista },

    { path: '/opcionrouter', name: "opcionlistarouter", component: opcionlistarouter, children: [

        { path: 'edit:codigo', name: "opcionedit", component: opcioneditrouter, props: true },

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
