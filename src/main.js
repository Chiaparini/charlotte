import '_scss/_main.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import VCalendar from 'v-calendar'
import Buefy from 'buefy'
import App from './App.vue'
import store from './app/stores/store.js'

Vue.use(VCalendar)
Vue.use(Buefy)
Vue.use(moment)
Vue.use(Vuex)

new Vue({
	store,
	...App
}).$mount('#app')
