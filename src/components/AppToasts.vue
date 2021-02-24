<template>
  <div>
    <template v-for="toast in toasts" :key="toast.key">
      <b-toast
        :header-class="`toast-header-${toast.variant}`"
        visible
        show
        @hidden="popToast(toast.key)"
      >
        <template #toast-title>
          <b-icon
            v-if="toast.variant === 'success'"
            icon="hand-thumbs-up"
            class="icon mr-1"
          />
          <b-icon
            v-else-if="toast.variant === 'danger'"
            icon="exclamation-triangle"
            class="icon mr-1"
          />
          <div>{{ toast.title }}</div>
        </template>

        <template #default>
          <div>{{ toast.description }}</div>
        </template>
      </b-toast>
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default {
  name: 'AppToasts',
  setup () {
    const store = useStore()
    const toasts = computed(() => store.state.ui.modals)
    const popToast = () => store.dispatch('ui/popModals')

    return {
      toasts,
      popToast,
    }
  },
}
</script>
