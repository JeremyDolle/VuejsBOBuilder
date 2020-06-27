<template>
  <default-data-table-entity>
    <template #data-table-default-prepend>
      <div>AHHHHHHH</div>
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
