<template>
    <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
        <entity-provider :module="$route.params.resource" :entity="$route.params.resource" :id="$route.params.id">
            <template #default="{data, isLoading, isError}">
                <b-spinner v-if="isLoading"/>
                <div v-else-if="isError">{{isError}}</div>
                <entity-form-generator
                    v-else-if="data"
                    :entity="data[0]"
                    :fields="entity.schema"
                    title="Formulaire d'édition"
                    @submit="editEntity($event, data[0].id)"
                />
            </template>
        </entity-provider>
    </b-container>
</template>

<script>

import EntityProvider from '@/components/EntityProvider'
import { mapActions, mapState } from 'vuex'
import EntityFormGenerator from '@/components/EntityFormGenerator'
export default {
  name: 'EditEntity',
  components: { EntityFormGenerator, EntityProvider },
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
      async editEntity (dispatch, form, id) {
        const { resource } = this.$route.params
        await dispatch(`${resource}/update_${resource}`, { id, payload: form })
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
