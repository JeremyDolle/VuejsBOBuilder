<script>
import { mapState } from 'vuex'

export default {
  name: 'Can',
  props: {
    resource: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({ config (state) { return { ...state.config.entities.find(({ name }) => name === this.resource) } } }),
    ...mapState({ me (state) { return { ...state.auth.me } } }),
    allowed () {
      if (!this.config) {
        return false
      }
      return this.config.needPermissions[this.action]
        .every(permission => this.me.permissions.includes(permission))
    },
  },
  render () {
    return this.$scopedSlots.default({
      allowed: this.allowed,
    })
  },
}
</script>
