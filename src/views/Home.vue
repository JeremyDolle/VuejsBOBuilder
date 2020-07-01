<template>
  <b-row class="home h-100 d-flex justify-content-center">
    <b-col cols="8">
      <well title="Bienvenu sur votre espace" />
    </b-col>
    <b-col cols="4">
      <well title="Mon compte" />
    </b-col>
  </b-row>
</template>

<script>
import Well from '@/components/Well'
export default {
  name: 'Home',
  components: { Well },
}
</script>
