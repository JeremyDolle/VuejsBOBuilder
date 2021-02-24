import fr from './fr'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'fr',
  messages: {
    fr: {
      ...fr,
    },
  },
})

export default i18n
