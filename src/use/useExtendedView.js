import { computed, reactive, toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default function useExtendedView (baseViewComponentName) {
  const route = useRoute()

  const resource = computed(() => route.params.resource)

  const data = reactive({
    componentIsReady: false,
    component: null,
  })

  const loadComponent = async (resource) => {
    data.componentIsReady = false
    try {
      data.component = await import('@/views/extendedViews/' + resource + '/' + baseViewComponentName + '.vue')
    } catch (e) {
      data.component = await import('@/views/defaultViews/Default' + baseViewComponentName + '.vue')
    }
    data.component = data.component.default.name
    data.componentIsReady = true
  }

  watch(resource, (newValue) => {
    loadComponent(newValue)
  }, { immediate: true })

  return { ...toRefs(data) }
}
