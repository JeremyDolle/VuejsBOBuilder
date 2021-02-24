<template>
  <component v-if="componentIsReady" :is="component" />
</template>

<script>
import useExtendedView from '@/use/useExtendedView'
import DefaultDataTableEntity from '@/views/defaultViews/DefaultDataTableEntity'

export default {
  name: 'DataTableEntity',
  components: { DefaultDataTableEntity },
  setup () {
    const { componentIsReady, component } = useExtendedView('DataTableEntity')

    return {
      componentIsReady,
      component,
    }
  },
}
</script>
