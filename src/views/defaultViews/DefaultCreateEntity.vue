<template>
  <b-container :key="`create-entity-${$route.params.resource}`">
    <well :title="$t('pages.create.title', {entity: entity.label})">
      <entity-form-generator
        :key="`create-entity-${$route.params.resource}-${$route.params.id}`"
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
