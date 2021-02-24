<template>
  <component :is="component" />
</template>

<script>
import useExtendedView from '@/use/useExtendedView'

export default {
  name: 'ViewEntity',
  setup () {
    const { component } = useExtendedView('ViewEntity')

    return {
      component,
    }
  },
}
</script>
