import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import store from '@/store'
import router from '@/router'
import register from '@/plugins/form-generator'
// import registerB from '@/plugins/bootstrap'
const app = createApp(App)

register(app)
// registerB(app)

app.use(store)
app.use(i18n)
app.use(router)

app.mount('#app')
