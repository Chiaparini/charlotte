import Vue from 'Vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        filters: { rate: 1 }
    },
    mutations: {
        SET_FILTERS (state, data) {
            Vue.set(state, 'filters', data)
        }
    },
    actions: {
        updateFilters ({ commit }, data) {
            commit('SET_FILTERS', data)
        }
    }
})

export default store