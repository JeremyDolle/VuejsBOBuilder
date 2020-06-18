<template>
    <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
        <entity-form-generator
            :fields="entity.schema"
            title="Formulaire de creation"
            @submit="createEntity"
        />
    </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EntityFormGenerator from '@/components/EntityFormGenerator'
export default {
  name: 'EditEntity',
  components: { EntityFormGenerator },
  computed: {
    entity () {
      if (!this.entities) {
        return null
      }
      return this.entities.find(item => item.name === this.$route.params.resource)
    },
    ...mapState('config', ['entities']),
  },
  methods: {
    ...mapActions({
      async createEntity (dispatch, form) {
        const { resource } = this.$route.params
        await dispatch(`${resource}/create_${resource}`, form)
        await this.$router.push({
          name: 'DefaultDataTableEntity',
          params: {
            resource: this.$route.params.resource,
          },
        })
      },
    }),
  },
}
</script>
