<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'CreateEntity',
  computed: {
    component () {
      const { resource } = this.$route.params
      return () => import('@/views/extendedViews/' + resource + '/CreateEntity.vue').catch((e) => {
        return import('@/views/defaultViews/DefaultCreateEntity.vue')
      })
    },
  },
}
</script>
