<template>
  <b-form-file
    class="w-100"
    placeholder="Choisissez un fichier"
    browse-text="Rechercher"
    @input="updateModelValue($event)"
  />
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldImageInput',
  mixins: [abstractField],
}
</script>
