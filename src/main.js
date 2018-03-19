import '_scss/_main.scss'
import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import Vuetify from 'vuetify'

Vue.use(VCalendar)
// Vue.use(Vuetify)

new Vue({
	...App
}).$mount('#app')
