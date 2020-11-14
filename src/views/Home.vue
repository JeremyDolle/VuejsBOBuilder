<template>
  <b-container class="home h-100">
    <b-row>
      <b-col
        v-for="(entity, index) in config.entities"
        :key="index"
        cols="6"
      >
        <well class="mb-3">
          <template #header>
            <h3>
              <b-icon :icon="entity.icon" />
              {{ entity.label }}
            </h3>
          </template>
          <p>{{ entity.description }}</p>
        </well>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Well from '@/components/Well'
import { ConfigMixin } from '@/mixins'
export default {
  name: 'Home',
  components: { Well },
  mixins: [ConfigMixin],
}
</script>
