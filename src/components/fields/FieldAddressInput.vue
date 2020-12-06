<template>
  <div>
    <input type="text">
    <input type="text">
    <input type="text">
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldAddressInput',
  mixins: [abstractField],
}
</script>
