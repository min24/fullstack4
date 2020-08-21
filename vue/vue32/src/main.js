import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('.search', {
	data() {
		return {

		}
	},
	
})

new Vue({
  render: h => h(App),
}).$mount('#app')
