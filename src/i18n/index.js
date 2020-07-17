import Vue from 'vue'
import fr from './fr'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'fr',
  messages: {
    fr: {
      ...fr,
    },
  },
})
