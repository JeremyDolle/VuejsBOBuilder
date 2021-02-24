<template>
  <b-list-group class="side-bar-menu">
    <b-list-group-item class="side-bar-menu--item logo">
      <router-link to="/">
        <b-img-lazy :src="lightLogo" />
        <small class="side-bar-menu-item--text">
          {{ applicationName }}
        </small>
      </router-link>
    </b-list-group-item>

    <b-list-group-item :class="['side-bar-menu--item', { active: route.name === 'Home' }]">
      <router-link to="/">
        <div class="side-bar-menu-item--icon">
          <b-icon
            :icon="route.name === 'Home' ? 'grid1x2-fill' : 'grid1x2'"
            class="icon"
          />
        </div>
        <small class="side-bar-menu-item--text">
          Acceuil
        </small>
      </router-link>
    </b-list-group-item>

    <template v-for="entity in entitiesConfig" :key="entity.name">
      <can
        action="read"
        :resource="entity.name"
      >
        <template #default="{ allowed }">
          <b-list-group-item
            v-if="allowed"
            :class="['side-bar-menu--item', {active: resource === entity.name}]"
          >
            <router-link
              :to="`${entity.url}/list`"
            >
              <div class="side-bar-menu-item--icon">
                <b-icon
                  :icon="resource === entity.name ? `${entity.icon}-fill` : entity.icon"
                  class="icon"
                />
              </div>
              <small class="side-bar-menu-item--text">
                {{ entity.label }}
              </small>
            </router-link>
          </b-list-group-item>
        </template>
      </can>
    </template>

    <b-list-group-item class="side-bar-menu--item mt-auto">
      <b-link @click.prevent="logout">
        <b-icon
          icon="power"
          class="icon"
        />
      </b-link>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
import { useAppConfig, useAppSettings } from '@/use'
import Can from '@/components/Can'

export default {
  name: 'SidebarMenu',
  components: { Can },
  setup () {
    const store = useStore()
    const route = useRoute()
    const { entitiesConfig } = useAppConfig()
    const { lightLogo, applicationName } = useAppSettings()
    const resource = computed(() => route.params.resource)

    const logout = () => {
      store.dispatch('auth/logout')
    }

    return {
      applicationName,
      route,
      entitiesConfig,
      lightLogo,
      resource,
      logout,
    }
  },
}
</script>
