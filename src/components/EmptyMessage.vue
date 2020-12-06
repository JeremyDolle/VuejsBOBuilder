<template>
  <div class="empty-message">
    <b-img-lazy :src="emptyLogo" />
    <p class="message">
      No data found
    </p>
  </div>
</template>

<script>
import { SettingsMixin } from '@/mixins'

export default {
  name: 'EmptyMessage',
  mixins: [SettingsMixin],
}
</script>
