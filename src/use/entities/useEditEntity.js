import { useStore } from 'vuex'
import useAppConfig from '@/use/useAppConfig'
import { useRoute, useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'

export default function useEditEntity () {
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

  const editEntity = async (form, id) => {
    const { resource } = route.params
    await store.dispatch(`${resource}/update_${resource}`, { id, payload: form })
    await router.push({
      name: 'DataTableEntity',
      params: {
        resource: route.params.resource,
      },
    })
  }

  return {
    entity,
    editEntity,
  }
}
