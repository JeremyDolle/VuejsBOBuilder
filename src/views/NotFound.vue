<template>
  <div class="not-found">
    <div class="not-found-status">
      4
      <b-img-lazy :src="notFoundLogo" />
      4
    </div>
    <div class="not-found-text">
      {{ t('pages.notFound.title') }}
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import useAppSettings from '@/use/useAppSettings'

export default {
  name: 'NotFound',
  setup () {
    const { t } = useI18n()
    const { notFoundLogo } = useAppSettings()

    return {
      t,
      notFoundLogo,
    }
  },
}
</script>
