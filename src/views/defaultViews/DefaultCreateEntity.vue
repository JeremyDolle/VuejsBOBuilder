<template>
  <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
    <entity-form-generator
      :fields="entity.schema"
      :title="$t('pages.create.title', {entity: entity.label})"
      @submit="createEntity"
    />
  </b-container>
</template>

<script>
import { DefaultCreateEntityMixin, PermissionsMixin } from '@/mixins'
import EntityFormGenerator from '@/components/EntityFormGenerator'

export default {
  name: 'DefaultCreateEntity',
  components: { EntityFormGenerator },
  mixins: [DefaultCreateEntityMixin, PermissionsMixin],
  props: {
    action: {
      type: String,
      default: 'Create',
    },
  },
}
</script>
