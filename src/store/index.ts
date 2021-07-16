import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    district: null
  },
  mutations: {
    changeDistrict(state, payload) {
      state.district = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
