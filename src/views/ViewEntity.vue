<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'ViewEntity',
  computed: {
    component () {
      const { resource } = this.$route.params
      return () => import('@/views/extendedViews/' + resource + '/ViewEntity.vue').catch((e) => {
        return import('@/views/defaultViews/DefaultViewEntity.vue')
      })
    },
  },
}
</script>
