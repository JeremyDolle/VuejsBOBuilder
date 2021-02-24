<template>
  <div class="empty-message">
    <b-img-lazy :src="emptyLogo" />
    <p class="message">
      No data found
    </p>
  </div>
</template>

<script>
import { useAppSettings } from '@/use'

export default {
  name: 'EmptyMessage',
  setup () {
    const { emptyLogo } = useAppSettings()

    return {
      emptyLogo,
    }
  },
}
</script>
