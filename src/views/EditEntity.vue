<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'EditEntity',
  computed: {
    component () {
      const { resource } = this.$route.params
      return () => import('@/views/extendedViews/' + resource + '/EditEntity.vue').catch((e) => {
        return import('@/views/defaultViews/DefaultEditEntity.vue')
      })
    },
  },
}
</script>
