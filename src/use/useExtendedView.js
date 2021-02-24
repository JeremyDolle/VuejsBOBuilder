import { reactive, toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default function useExtendedView (baseViewComponentName) {
  const route = useRoute()
  const data = reactive({
    componentIsReady: false,
    component: null,
  })

  const loadComponent = async () => {
    try {
      data.component = await import('@/views/extendedViews/' + route.params.resource + '/' + baseViewComponentName + '.vue')
    } catch (e) {
      data.component = await import('@/views/defaultViews/Default' + baseViewComponentName + '.vue')
    }
    data.component = data.component.default.name
    data.componentIsReady = true
  }

  onMounted(() => loadComponent())

  return { ...toRefs(data) }
}
