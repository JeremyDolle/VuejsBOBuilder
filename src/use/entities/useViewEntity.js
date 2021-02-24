import useAppConfig from '@/use/useAppConfig'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

export default function useViewEntity () {
  const route = useRoute()
  const { entitiesConfig } = useAppConfig()

  const entity = computed(() => {
    if (!entitiesConfig.value) {
      return null
    }
    const founded = entitiesConfig.value.find(item => item.name === route.params.resource)

    founded.schema = founded.schema.map((field) => ({ ...field, readonly: true, disabled: true }))

    return founded
  })

  return {
    entity,
  }
}
