<template>
  <default-data-table-entity>
    <template #data-table-default-prepend>
      <div class="m-2 text-center">🚧 TEST DE OVERRIDE DE LA VUE DE BASE 🚧 </div>
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
