import settings from '@/config/settings.json'

export default {
  computed: {
    applicationName () {
      return settings.name
    },
    applicationLogos () {
      return settings.logos
    },
    coloredLogo () {
      return require(`@/assets/images/${this.applicationLogos.colored}`)
    },
    lightLogo () {
      return require(`@/assets/images/${this.applicationLogos.light}`)
    },
    darkLogo () {
      return require(`@/assets/images/${this.applicationLogos.dark}`)
    },
  },
}
