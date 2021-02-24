<template>
  <b-container :key="`edit-entity-${route.params.resource}-${route.params.id}`">
    <entity-provider
      :id="route.params.id"
      :module="route.params.resource"
      :entity="route.params.resource"
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
          :title="t('pages.edit.title', {entity: entity.label})"
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
import Well from '@/components/Well'
import usePermissions from '@/use/usePermissions'
import useEditEntity from '@/use/entities/useEditEntity'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'DefaultEditEntity',
  components: { Well, EntityFormGenerator, EntityProvider },
  props: {
    action: {
      type: String,
      default: 'update',
    },
  },
  setup (props) {
    const route = useRoute()
    const { t } = useI18n()

    usePermissions(props.action)
    const { entity, editEntity } = useEditEntity()

    return {
      entity,
      editEntity,
      route,
      t,
    }
  },
}
</script>
