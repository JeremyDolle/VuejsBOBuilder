<template>
  <component :is="component" />
</template>

<script>
import useExtendedView from '@/use/useExtendedView'

export default {
  name: 'EditEntity',
  setup () {
    const { component } = useExtendedView('EditEntity')

    return {
      component,
    }
  },
}
</script>
