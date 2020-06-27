<template>
  <vue-tel-input
    v-model="value"
    :valid-characters-only="true"
    @validate="validate"
  />
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldPhoneInput',
  mixins: [abstractField],
  methods: {
    validate (object) {
      this.vfg.errors = this.vfg.errors.filter(({ field }) => field.key !== this.schema.key)
      if (typeof object === 'undefined') {
        this.vfg.errors = [
          ...this.vfg.errors,
          {
            error: 'Numéro de téléphone non valide',
            field: this.schema,
          },
        ]
      } else if (typeof object === 'object' && this.value) {
        const { isValid } = object
        if (isValid === false) {
          this.vfg.errors = [
            ...this.vfg.errors,
            {
              error: 'Numéro de téléphone non valide',
              field: this.schema,
            },
          ]
        }
      }
    },
  },
}
</script>
