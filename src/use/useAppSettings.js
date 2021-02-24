import settings from '@/config/settings.json'
import { computed } from '@vue/reactivity'

export default function useAppSettings () {
  const applicationName = computed(() => {
    return settings.name
  })
  const applicationLogos = computed(() => {
    return settings.logos
  })
  const getLogo = (logo) => {
    return require(`@/assets/images/${applicationLogos.value[logo]}`)
  }

  return {
    applicationName,
    coloredLogo: computed(() => getLogo('colored')),
    lightLogo: computed(() => getLogo('light')),
    darkLogo: computed(() => getLogo('dark')),
    notFoundLogo: computed(() => getLogo('notFound')),
    emptyLogo: computed(() => getLogo('empty')),
  }
}
