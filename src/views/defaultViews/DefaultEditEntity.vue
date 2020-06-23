<template>
  <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
    <entity-provider
      :module="$route.params.resource"
      :entity="$route.params.resource"
      :id="$route.params.id"
    >
      <template #default="{data, isLoading, isError}">
        <b-spinner
          v-if="isLoading"
          variant="secondary"
        />
        <div v-else-if="isError">
          {{ isError }}
        </div>
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
import EntityFormGenerator from '@/components/EntityFormGenerator'
import { DefaultEditEntityMixin } from '@/mixins'

export default {
  name: 'DefaultEditEntity',
  components: { EntityFormGenerator, EntityProvider },
  mixins: [DefaultEditEntityMixin],
}
</script>
