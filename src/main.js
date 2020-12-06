import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
