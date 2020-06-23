<template>
  <default-data-table-entity>
    <template #data-table--well-header="{title}">
      <div>
        {{ title }} - Liste des utilisateurs
      </div>
    </template>
  </default-data-table-entity>
</template>

<script>
import DefaultDataTableEntity from '@/views/defaultViews/DefaultDataTableEntity'
export default {
  name: 'DataTableEntity',
  components: { DefaultDataTableEntity },
}
</script>
