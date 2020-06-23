<template>
  <div>
    <template v-for="toast in toasts">
      <b-toast
        :key="toast.key"
        :header-class="`toast-header-${toast.variant}`"
        @hidden="popToast(toast.key)"
        visible
        show
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppToasts',
  computed: {
    ...mapState('ui', ['toasts']),
  },
  methods: {
    ...mapActions('ui', ['popToast']),
  },
}
</script>
