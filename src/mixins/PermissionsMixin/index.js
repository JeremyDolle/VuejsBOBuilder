import { mapGetters } from 'vuex'

export default {
  props: {
    action: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      mePermissions: 'auth/mePermissions',
      getEntityPermissionsByName: 'config/getEntityPermissionsByName',
    }),
  },
  mounted () {
    if (!this.getEntityPermissionsByName(this.$route.params.resource)[this.action].every(item => this.mePermissions.includes(item))) {
      this.$router.push({ name: 'Home' })
    }
  },
}
