<template>
    <well :title="entity.name" class="h-100 data-table">
        <template #header>
            <div class="data-table-header">
                <span>{{ entity.name }}</span>
                <b-link :to="{ name: 'DefaultCreateEntity', params: { resource: $route.params.resource } }">
                    <b-icon icon="plus-circle" class="icon ml-auto text-secondary"></b-icon>
                </b-link>
            </div>
        </template>

        <entity-provider
            v-if="entity"
            :key="entity.name"
            :entity="entity.name"
            :module="entity.name"
        >
            <template #default="{data, isLoading, isError}">
                <div v-if="isError">{{isError}}</div>
                <div v-else-if="isLoading" class="w-100 text-center"><b-spinner variant="secondary"/></div>
                <template v-else>
                    <b-table
                        sticky-header
                        :items="data"
                        :fields="[...entity.schema.map(field => field.key), 'actions']"
                        class="h-100"
                    >
                        <template #cell()="data">
                            <table-cell :key="data.item.id" :schema="entity.schema" :field="data"/>
                        </template>
                        <template #cell(actions)="data">
                            <div class="data-table-actions">
                                <b-link
                                        class="data-table-action"
                                        :to="{
                                    name: 'DefaultEditEntity',
                                    params: { resource: $route.params.resource, id: data.item.id }
                                }"
                                >
                                    <b-icon icon="pencil"/>
                                </b-link>
                                <b-link
                                        class="data-table-action"
                                        href="#"
                                        @click.prevent="() => deleteEntity(data.item.id)"
                                >
                                    <b-icon icon="trash"/>
                                </b-link>
                            </div>
                        </template>
                    </b-table>
                </template>
            </template>
        </entity-provider>
    </well>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EntityProvider from '@/components/EntityProvider'
import Well from '@/components/Well'
import TableCell from '@/components/TableEntityCell'

export default {
  name: 'DataTableEntity',
  components: { Well, EntityProvider, TableCell },
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
      async deleteEntity (dispatch, id) {
        this.$bvModal.msgBoxConfirm('Etes-vous certain de vouloir supprimer cette ligne ? Un fois supprimé, elle se pourra plus etre récupérée.', {
          title: 'Confimez-vous la suppression ?',
          cancelVariant: 'default',
          okTitle: 'Supprimer',
          cancelTitle: 'Annuler',
          hideHeaderClose: true,
          centered: true,
          headerClass: 'border-0 d-flex justify-content-center',
          bodyClass: 'text-center',
          footerClass: 'border-0',
        })
          .then(value => {
            if (value) {
              const { resource } = this.$route.params
              dispatch(`${resource}/delete_${resource}`, { id })
            }
          })
          .catch(err => {
            console.error(err)
            // An error occurred
          })
      },
    }),
  },
}
</script>
