import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      page: 1,
    }
  },
  computed: {
    entity () {
      if (!this.entities) {
        return null
      }
      return this.entities.find(item => item.name === this.$route.params.resource)
    },
    ...mapState('config', ['entities']),
    slotDataTableWellHeader () {
      return {
        title: this.entity.name,
        to: { name: 'CreateEntity', params: { resource: this.$route.params.resource } },
      }
    },
  },
  methods: {
    ...mapActions({
      async deleteEntity (dispatch, id) {
        this.$bvModal.msgBoxConfirm('Etes-vous certain de vouloir supprimer cette ligne ? Un fois supprimé, elle se pourra plus etre récupérée.', {
          title: 'Confimez-vous la suppression ?',
          cancelVariant: 'default',
          okTitle: 'Supprimer',
          cancelTitle: 'Annuler',
          hideHeaderClose: true,
          centered: true,
          headerClass: 'border-0 d-flex justify-content-center',
          bodyClass: 'text-center',
          footerClass: 'border-0',
        })
          .then(value => {
            if (value) {
              const { resource } = this.$route.params
              dispatch(`${resource}/delete_${resource}`, { id })
            }
          })
          .catch(err => {
            console.error(err)
            // An error occurred
          })
      },
    }),
  },
}
