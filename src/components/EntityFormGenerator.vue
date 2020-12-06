<template>
  <form @submit.prevent.stop="$emit('submit', model)">
    <vue-form-generator
      v-if="model"
      :schema="{fields: fields}"
      :model="model"
      :options="formOptions"
      @validated="onValidated"
    />
    <b-button
      v-if="!noSubmit"
      type="submit"
      :disabled="!submitEnable"
    >
      {{ $t('actions.valid') }}
    </b-button>
  </form>
</template>

<script>
export default {
  name: 'EntityFormGenerator',
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
    noSubmit: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      model: null,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
      submitEnable: false,
    }
  },
  mounted () {
    this.model = this.entity
  },
  methods: {
    onValidated (isValid /* , errors */) {
      this.submitEnable = isValid
    },
  },
}
</script>
