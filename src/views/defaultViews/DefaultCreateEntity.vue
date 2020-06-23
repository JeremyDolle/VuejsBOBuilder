<template>
  <b-container :key="`edit-entity-${$route.params.resource}-${$route.params.id}`">
    <entity-form-generator
      :fields="entity.schema"
      title="Formulaire de creation"
      @submit="createEntity"
    />
  </b-container>
</template>

<script>
import { DefaultCreateEntityMixin } from '@/mixins'
import EntityFormGenerator from '@/components/EntityFormGenerator'

export default {
  name: 'DefaultEditEntity',
  mixins: [DefaultCreateEntityMixin],
  components: { EntityFormGenerator },
}
</script>
