<template>
  <div class="not-found">
    <div class="not-found-status">
      4
      <b-img-lazy :src="notFoundLogo" />
      4
    </div>
    <div class="not-found-text">
      {{ $t('pages.notFound.title') }}
    </div>
  </div>
</template>

<script>
import { SettingsMixin } from '@/mixins'

export default {
  name: 'NotFound',
  mixins: [SettingsMixin],
}
</script>
