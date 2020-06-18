<template>
    <div class="login">
        <b-img-lazy class="logo" :src="require('@/assets/images/logo_colored.png')"></b-img-lazy>
        <well title="Bienvenue sur votre BackOffice">
            <b-input placeholder="email" class="mb-3" v-model="form.email"/>
            <b-input placeholder="mot de passe" class="mb-3" v-model="form.password" type="password"/>
            <b-button @click="submit">Se connecter</b-button>
        </well>
    </div>
</template>

<script>
import Well from '@/components/Well'
import { AuthMixin } from '@/mixins'

export default {
  name: 'Login',
  components: { Well },
  mixins: [AuthMixin],
}
</script>
