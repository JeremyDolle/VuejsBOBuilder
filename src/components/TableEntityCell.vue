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
    <b-img-lazy
      v-if="field.value"
      height="50"
      width="50"
      class="fit-cover"
      rounded="circle"
      :src="field.value"
    />
  </div>
  <div v-else>
    {{ field.value }}
  </div>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
import { computed } from '@vue/reactivity'

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
  setup (props) {
    const isRelation = computed(() => {
      return props.resource.isRelation
    })
    const isImage = computed(() => {
      return props.resource.isImage
    })
    const resource = computed(() => {
      return props.schema.find(field => {
        return field.key === props.field.field.key
      })
    })
    const id = computed(() => {
      return props.field.value
    })

    return {
      isRelation,
      isImage,
      resource,
      id,
    }
  },
}
</script>
