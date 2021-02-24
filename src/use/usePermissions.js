import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default function usePermissions (action) {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  const mePermissions = computed(() => store.getters['auth/mePermissions'])
  const getEntityPermissionsByName = computed(() => store.getters['config/getEntityPermissionsByName'](route.params.resource))

  onMounted(() => {
    if (!getEntityPermissionsByName.value[action].every(item => mePermissions.value.includes(item))) {
      router.push({ name: 'Home' })
    }
  })
}
