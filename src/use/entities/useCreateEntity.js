import { useStore } from 'vuex'
import useAppConfig from '@/use/useAppConfig'
import { useRoute, useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'

export default function useCreateEntity () {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  const { entitiesConfig } = useAppConfig()

  const entity = computed(() => {
    if (!entitiesConfig.value) {
      return null
    }
    return entitiesConfig.value.find(item => item.name === route.params.resource)
  })

  const createEntity = async (form) => {
    const { resource } = route.params
    await store.dispatch(`${resource}/create_${resource}`, form)
    await router.push({
      name: 'DataTableEntity',
      params: {
        resource: route.params.resource,
      },
    })
  }

  return {
    entity,
    createEntity,
  }
}
