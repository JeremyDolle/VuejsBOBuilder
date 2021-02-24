<template>
  <b-container class="home h-100">
    <b-row>
      <b-col
        v-for="(entity, index) in entitiesConfig"
        :key="index"
        cols="6"
      >
        <well class="mb-3">
          <template #header>
            <h4>
              <b-icon :icon="entity.icon" />
              {{ entity.label }}
            </h4>
          </template>
          <p>{{ entity.description }}</p>
        </well>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Well from '@/components/Well'
import useAppConfig from '@/use/useAppConfig'
export default {
  name: 'Home',
  components: { Well },
  setup () {
    const { entitiesConfig } = useAppConfig()

    return {
      entitiesConfig,
    }
  },
}
</script>
