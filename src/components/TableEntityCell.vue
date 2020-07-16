<template>
  <entity-provider
    v-if="isRelation"
    :id="id"
    :key="id"
    :module="resource.inputType"
    :entity="resource.inputType"
    :convert-to-string="resource.convertToString"
  >
    <template #default="{data, isLoading, isError}">
      <b-spinner
        v-if="isLoading"
        variant="secondary"
      />
      <div v-else-if="isError">
        {{ isError }}
      </div>
      <div v-else>
        {{ data }}
      </div>
    </template>
  </entity-provider>
  <div v-else-if="isImage">
    <b-img-lazy v-if="field.value" height="50" width="50" class="fit-cover" rounded="circle" :src="field.value" />
  </div>
  <div v-else>
    {{ field.value }}
  </div>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
export default {
  name: 'TableEntityCell',
  components: { EntityProvider },
  props: {
    field: {
      type: Object,
      required: true,
    },
    schema: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isRelation () {
      return this.resource.isRelation
    },
    isImage () {
      return this.resource.isImage
    },
    resource () {
      return this.schema.find(field => {
        return field.key === this.field.field.key
      })
    },
    id () {
      return this.field.value
    },
  },
}
</script>
