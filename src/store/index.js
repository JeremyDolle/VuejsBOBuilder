import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()],
})
