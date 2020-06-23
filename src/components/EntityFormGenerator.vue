<template>
  <well :title="title">
    <vue-form-generator
      :schema="{fields: fields}"
      :model="model"
      :options="formOptions"
    />
    <b-button @click.prevent="$emit('submit', model)">
      APPLY
    </b-button>
  </well>
</template>

<script>
import Well from '@/components/Well'
export default {
  name: 'EntityFormGenerator',
  components: { Well },
  props: {
    entity: {
      type: Object,
      default: () => ({}),
    },
    fields: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      model: {},
      formOptions: {
        // validateAfterLoad: true,
        // validateAfterChanged: true,
        // validateAsync: true,
      },
    }
  },
  mounted () {
    this.model = this.entity
  },
}
</script>
