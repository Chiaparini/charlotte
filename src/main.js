import '_scss/_main.scss'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
	...App
}).$mount('#app')
