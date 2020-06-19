import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import CreatePersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const dataState = new CreatePersistedState({
  paths: ['auth'],
})

export default new Vuex.Store({
  modules,
  plugins: [dataState],
})
