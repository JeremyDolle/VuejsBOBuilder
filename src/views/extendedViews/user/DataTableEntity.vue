<template>
  <default-data-table-entity>
    <template #data-table--well-header="{title}">
      <div>
        {{ title }} - Liste
      </div>
    </template>
    <template #default="{entities}">
      <div class="h-100 overflow-auto">
        <pre>{{ entities }}</pre>
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
