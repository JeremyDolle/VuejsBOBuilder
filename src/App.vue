<template>
  <div class="h-100">
    <div
      v-if="loading"
      class="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <small>{{ t('app.loading') }}</small>
      <b-spinner variant="secondary" />
    </div>

    <template v-else>
      <component :is="!isConnected ? 'AnonymousTemplate' : 'ConnectedTemplate'" />
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import registerEntity from '@/store/modules/entities'
import { AnonymousTemplate, ConnectedTemplate } from '@/templates'
import { computed, reactive, toRefs } from '@vue/reactivity'
import useAppConfig from '@/use/useAppConfig'
import { onMounted } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'

export default {
  components: { AnonymousTemplate, ConnectedTemplate },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const data = reactive({ loading: true })

    const { entitiesConfig, registerApplication } = useAppConfig()
    const isConnected = computed(() => store.getters['auth/isConnected'])

    onMounted(async () => {
      await registerApplication()
      entitiesConfig.value.map(({ name, api }) => {
        return store.registerModule(
          [name],
          registerEntity(name, api),
        )
      })
      data.loading = false
    })

    return {
      state: store.state, // TODO delete when vuejs devtool have vuex debugger
      ...toRefs(data),
      isConnected,
      t,
    }
  },
}
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
  @import './assets/scss/index.scss';
</style>
