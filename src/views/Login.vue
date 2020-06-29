<template>
  <div class="login">
    <b-img-lazy
      class="logo"
      :src="coloredLogo"
    />
    <well title="Bienvenue sur votre BackOffice">
      <b-input
        v-model="form.email"
        placeholder="email"
        class="mb-3"
      />
      <b-input
        v-model="form.password"
        placeholder="mot de passe"
        class="mb-3"
        type="password"
      />
      <b-button @click="submit">
        Se connecter
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
