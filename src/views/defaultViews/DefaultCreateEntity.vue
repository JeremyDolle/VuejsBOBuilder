<template>
  <b-container :key="`create-entity-${route.params.resource}`">
    <well :title="t('pages.create.title', {entity: entity.label})">
      <entity-form-generator
        :key="`create-entity-${route.params.resource}-${route.params.id}`"
        :fields="entity.schema"
        @submit="createEntity"
      />
    </well>
  </b-container>
</template>

<script>
import EntityFormGenerator from '@/components/EntityFormGenerator'
import Well from '@/components/Well'
import usePermissions from '@/use/usePermissions'
import useCreateEntity from '@/use/entities/useCreateEntity'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'DefaultCreateEntity',
  components: { Well, EntityFormGenerator },
  props: {
    action: {
      type: String,
      default: 'create',
    },
  },
  setup (props) {
    const route = useRoute()
    const { t } = useI18n()
    usePermissions(props.action)
    const { entity, createEntity } = useCreateEntity()

    return {
      t,
      route,
      entity,
      createEntity,
    }
  },
}
</script>
