<template>
  <vue-tel-input v-model="value" />
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldPhoneInput',
  mixins: [abstractField],
}
</script>
