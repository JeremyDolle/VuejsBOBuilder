<template>
    <entity-provider
        :key="id"
        v-if="isRelation"
        :module="resource.inputType"
        :entity="resource.inputType"
        :convert-to-string="resource.toString"
        :id="id"
    >
        <template #default="{data, isLoading, isError}">
            <b-spinner v-if="isLoading" variant="secondary"/>
            <div v-else-if="isError">{{isError}}</div>
            <div v-else style="width: 300px">{{ data }}</div>
        </template>
    </entity-provider>
    <div v-else>{{field.value}}</div>
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
