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

    <b-list-group-item :class="['side-bar-menu--item', { active: $route.name === 'Home' }]">
      <router-link to="/">
        <div class="side-bar-menu-item--icon">
          <b-icon
            :icon="$route.name === 'Home' ? 'grid1x2-fill' : 'grid1x2'"
            class="icon"
          />
        </div>
        <small class="side-bar-menu-item--text">
          Acceuil
        </small>
      </router-link>
    </b-list-group-item>

    <template v-for="entity in entities">
      <can
        :key="entity.name"
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
import { mapState } from 'vuex'
import { AuthMixin, SettingsMixin } from '@/mixins'
import Can from '@/components/Can'

export default {
  name: 'SidebarMenu',
  components: { Can },
  mixins: [SettingsMixin, AuthMixin],
  computed: {
    ...mapState('config', ['entities']),
    resource () {
      return this.$route.params.resource
    },
  },
}
</script>
