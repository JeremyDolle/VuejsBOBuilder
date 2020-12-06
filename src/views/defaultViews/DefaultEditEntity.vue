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
        <well
          v-else-if="data"
          :title="$t('pages.edit.title', {entity: entity.label})"
        >
          <entity-form-generator
            :entity="data[0]"
            :fields="entity.schema"
            @submit="editEntity($event, data[0]._id)"
          />
        </well>
      </template>
    </entity-provider>
  </b-container>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
import EntityFormGenerator from '@/components/EntityFormGenerator'
import { DefaultEditEntityMixin, PermissionsMixin } from '@/mixins'
import Well from '@/components/Well'

export default {
  name: 'DefaultEditEntity',
  components: { Well, EntityFormGenerator, EntityProvider },
  mixins: [DefaultEditEntityMixin, PermissionsMixin],
  props: {
    action: {
      type: String,
      default: 'update',
    },
  },
}
</script>
