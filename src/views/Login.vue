<template>
  <div class="login">
    <b-img-lazy
      class="logo"
      :src="coloredLogo"
    />
    <well :title="$t('app.welcome')">
      <b-input
        v-model="form.email"
        :placeholder="$t('fields.email.placeholder')"
        class="mb-3"
      />
      <b-input
        v-model="form.password"
        :placeholder="$t('fields.password.placeholder')"
        class="mb-3"
        type="password"
      />
      <b-button @click="submit">
        {{ $t('actions.connect') }}
      </b-button>
    </well>
  </div>
</template>

<script>
import Well from '@/components/Well'
import { AuthMixin, SettingsMixin } from '@/mixins'

export default {
  name: 'Login',
  components: { Well },
  mixins: [AuthMixin, SettingsMixin],
}
</script>
