<template>
  <component :is="component" />
</template>

<script>
import useExtendedView from '@/use/useExtendedView'

export default {
  name: 'CreateEntity',
  setup () {
    const { component } = useExtendedView('CreateEntity')

    return {
      component,
    }
  },
}
</script>
