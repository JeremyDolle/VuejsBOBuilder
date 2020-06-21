<template>
    <b-list-group class="side-bar-menu">
        <b-list-group-item class="side-bar-menu--item logo">
            <router-link to="/">
                <b-img-lazy :src="require('@/assets/images/logo_white.png')"></b-img-lazy>
            </router-link>
        </b-list-group-item>

        <b-list-group-item :class="['side-bar-menu--item', { active: $route.name === 'Home' }]">
            <router-link to="/">
                <div class="side-bar-menu-item--icon">
                    <b-icon :icon="$route.name === 'Home' ? 'grid1x2-fill' : 'grid1x2'" class="icon"/>
                </div>
                <small class="side-bar-menu-item--text">
                    Main
                </small>
            </router-link>
        </b-list-group-item>

        <b-list-group-item
            v-for="entity in entities"
            :key="entity.name"
            :class="['side-bar-menu--item', {active: resource === entity.name}]"
        >
            <router-link :to="`${entity.url}/list`">
                <div class="side-bar-menu-item--icon">
                    <b-icon :icon="resource === entity.name ? `${entity.icon}-fill` : entity.icon" class="icon"/>
                </div>
                <small class="side-bar-menu-item--text">
                    {{ entity.name }}
                </small>
            </router-link>
        </b-list-group-item>

        <b-list-group-item class="side-bar-menu--item mt-auto">
            <router-link to="/">
                <b-icon icon="power" class="icon"/>
            </router-link>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SidebarMenu',
  computed: {
    ...mapState('config', ['entities']),
    resource () {
      return this.$route.params.resource
    },
  },
}
</script>
