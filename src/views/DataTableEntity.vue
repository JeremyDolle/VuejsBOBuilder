<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'DataTableEntity',
  computed: {
    component () {
      const { resource } = this.$route.params
      return () => import('@/views/extendedViews/' + resource + '/DataTableEntity.vue').catch((e) => {
        return import('@/views/defaultViews/DefaultDataTableEntity.vue')
      })
    },
  },
}
</script>
