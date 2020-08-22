import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)


// define routes
import routes from './routes.js'

console.log(routes);

const router = new VueRouter({
	mode: 'history',
	routes: routes,
});


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
