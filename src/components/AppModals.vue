<template>
  <div>
    <template v-for="modal in modals" :key="modal.key">
      <b-modal
        visible
      >
        <component
          :is="modal.component"
          v-bind="modal.componentProps"
          @submit="modal.componentProps.onSubmit"
        />
      </b-modal>
      <!--      <b-toast-->
      <!--        :key="toast.key"-->
      <!--        :header-class="`toast-header-${toast.variant}`"-->
      <!--        visible-->
      <!--        show-->
      <!--        @hidden="popToast(toast.key)"-->
      <!--      >-->
      <!--        <template #toast-title>-->
      <!--          <b-icon-->
      <!--            v-if="toast.variant === 'success'"-->
      <!--            icon="hand-thumbs-up"-->
      <!--            class="icon mr-1"-->
      <!--          />-->
      <!--          <b-icon-->
      <!--            v-else-if="toast.variant === 'danger'"-->
      <!--            icon="exclamation-triangle"-->
      <!--            class="icon mr-1"-->
      <!--          />-->
      <!--          <div>{{ toast.title }}</div>-->
      <!--        </template>-->

      <!--        <template #default>-->
      <!--          <div>{{ toast.description }}</div>-->
      <!--        </template>-->
      <!--      </b-toast>-->
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import EntityFormGenerator from '@/components/EntityFormGenerator'
import { computed } from '@vue/reactivity'

export default {
  name: 'AppModals',
  components: { EntityFormGenerator },
  setup () {
    const store = useStore()
    const modals = computed(() => store.state.ui.modals)
    const popModals = () => store.dispatch('ui/popModals')

    return {
      modals,
      popModals,
    }
  },
}
</script>
