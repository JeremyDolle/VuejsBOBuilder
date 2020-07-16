<template>
  <well :title="title">
    <div>
      <form @submit.prevent.stop="$emit('submit', model)">
        <vue-form-generator
          v-if="model"
          :schema="{fields: fields}"
          :model="model"
          :options="formOptions"
          @validated="onValidated"
        />
        <b-button
          type="submit"
          :disabled="!submitEnable"
        >
          VALIDER
        </b-button>
      </form>
    </div>
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
