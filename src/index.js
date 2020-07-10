import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta';
import VuePageTransition from 'vue-page-transition'
import VueLazyload from 'vue-lazyload'
import VueSimpleSVG from 'vue-simple-svg'
import VueTheMask from 'vue-the-mask'
import vSelect from 'vue-select'
import "regenerator-runtime/runtime.js";


Vue.component('v-select', vSelect)
Vue.use(VueTheMask)
Vue.use(VueSimpleSVG)
Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: '/assets/img/lazyload/error.png',
  loading: '/assets/img/lazyload/puff.svg',
  attempt: 1
})

Vue.use(Meta);
Vue.use(VuePageTransition)

import { sync } from 'vuex-router-sync'

import './js/'
//import './css/main.css'
import './assets/scss/main.scss'

import router from './router'
import store from './store'

sync(store, router)


const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')