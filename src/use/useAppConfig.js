import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default function useAppConfig () {
  const store = useStore()

  const config = computed(() => store.state.config)

  const entitiesConfig = computed(() => {
    return config.value.entities
  })

  const registerApplication = () => store.dispatch('config/registerApplication')

  return {
    config,
    entitiesConfig,
    registerApplication,
  }
}
