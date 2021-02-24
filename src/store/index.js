import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as modules from './modules'

const dataState = createPersistedState({
  paths: ['auth'],
})

// Create a new store instance.
const store = createStore({
  modules,
  plugins: [dataState],
})

export default store
