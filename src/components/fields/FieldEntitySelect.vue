<template>
  <entity-provider
    v-if="ready"
    :entity="schema.inputType"
    :module="schema.inputType"
  >
    <template #default="{data, isLoading, isError}">
      <b-spinner
        v-if="isLoading"
        variant="secondary"
      />
      <div v-else-if="isError">
        {{ isError }}
      </div>
      <div
        v-else
        class="d-flex"
      >
        <!-- If edit -->
        <entity-provider
          v-if="model[schema.key]"
          :id="model[schema.key]"
          :entity="schema.inputType"
          :module="schema.inputType"
        >
          <template #default="{data: entity, isLoading: entityLoading, isError: entityError}">
            <b-spinner
              v-if="entityLoading"
              variant="secondary"
            />
            <div v-else-if="entityError">
              {{ entityError }}
            </div>
            <multiselect
              v-else-if="entity"
              v-model="entity[0]"
              deselect-label="Can't remove this value"
              track-by="id"
              label="title"
              :placeholder="schema.placeholder"
              :options="data"
              :allow-empty="false"
              v-bind="schema"
              @input="updateModelValue($event._id)"
            />
          </template>
        </entity-provider>
        <!-- If not -->
        <multiselect
          v-else
          v-model="model[schema.key]"
          deselect-label="Can't remove this value"
          track-by="id"
          label="title"
          :placeholder="schema.placeholder"
          :options="data"
          :allow-empty="false"
          v-bind="schema"
          @input="updateModelValue($event._id)"
        />

        <!-- Add entity -->
        <b-button
          v-if="!schema.disabled || !schema.readonly"
          class="ml-1"
          @click="addEntity"
        >
          <b-icon icon="plus" />
        </b-button>
      </div>
    </template>
  </entity-provider>
</template>

<script>
import { abstractField } from 'vue-form-generator'
import EntityProvider from '@/components/EntityProvider'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FieldEntitySelect',
  components: { EntityProvider },
  mixins: [abstractField],
  data () {
    return {
      ready: true,
    }
  },
  computed: {
    entity () {
      if (!this.entities) {
        return null
      }
      return this.entities.find(item => item.name === this.schema.inputType)
    },
    ...mapState('config', ['entities']),
  },
  methods: {
    ...mapActions({
      addEntity (dispatch) {
        return dispatch('ui/showModal', {
          title: 'AJOUT',
          component: 'EntityFormGenerator',
          componentProps: {
            fields: this.entity.schema,
            onSubmit: this.createEntity,
          },
        })
      },
    }),
    ...mapActions({
      async createEntity (dispatch, form) {
        const { name } = this.entity
        this.ready = false
        await dispatch(`${name}/create_${name}`, form)
        this.ready = true
        await dispatch('ui/popModal')
      },
    }),
  },
}
</script>
