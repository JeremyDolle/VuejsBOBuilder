<template>
  <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
    <well :title="$t('pages.create.title', {entity: entity.label})">
      <entity-form-generator
        :fields="entity.schema"
        @submit="createEntity"
      />
    </well>
  </b-container>
</template>

<script>
import { DefaultCreateEntityMixin, PermissionsMixin } from '@/mixins'
import EntityFormGenerator from '@/components/EntityFormGenerator'
import Well from '@/components/Well'

export default {
  name: 'DefaultCreateEntity',
  components: { Well, EntityFormGenerator },
  mixins: [DefaultCreateEntityMixin, PermissionsMixin],
  props: {
    action: {
      type: String,
      default: 'create',
    },
  },
}
</script>
