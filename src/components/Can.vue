<script>
import { useStore } from 'vuex'
import { useAppConfig } from '@/use'
import { computed } from '@vue/reactivity'

export default {
  name: 'Can',
  props: {
    resource: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  setup (props, context) {
    const store = useStore()
    const { entitiesConfig } = useAppConfig()
    const me = computed(() => store.state.auth.me)

    const entityConfig = computed(() => {
      return entitiesConfig.value.find(({ name }) => name === props.resource)
    })

    const allowed = computed(() => {
      if (!entityConfig.value) {
        return false
      }
      return entityConfig.value.needPermissions[props.action]
        .every(permission => (me.value.permissions || []).includes(permission))
    })

    return () => context.slots.default({
      allowed: allowed.value,
    })
  },
}
</script>
