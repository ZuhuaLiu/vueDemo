import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
