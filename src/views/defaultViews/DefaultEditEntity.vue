<template>
  <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
    <entity-provider
      :id="$route.params.id"
      :module="$route.params.resource"
      :entity="$route.params.resource"
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
          :title="$t('pages.edit.title', {entity: entity.label})"
          @submit="editEntity($event, data[0]._id)"
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
