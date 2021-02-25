<template>
  <component v-if="componentIsReady" :is="component" />
</template>

<script>
import useExtendedView from '@/use/useExtendedView'
import DefaultDataTableEntity from '@/views/defaultViews/DefaultDataTableEntity'
import UserDataTableEntity from '@/views/extendedViews/user/DataTableEntity'

export default {
  name: 'DataTableEntity',
  components: { DefaultDataTableEntity, UserDataTableEntity },
  setup () {
    const { componentIsReady, component } = useExtendedView('DataTableEntity')

    return {
      componentIsReady,
      component,
    }
  },
}
</script>
