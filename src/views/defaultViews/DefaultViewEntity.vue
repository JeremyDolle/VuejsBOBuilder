<template>
  <b-container :key="`view-entity-${route.params.resource}-${route.params.id}`">
    <entity-provider
      :id="route.params.id"
      :module="route.params.resource"
      :entity="route.params.resource"
    >
      <template #default="{data, isLoading, isError}">
        <b-spinner
          v-if="isLoading"
          variant="secondary"
        />
        <div v-else-if="isError">
          {{ isError }}
        </div>
        <well
          v-else-if="data"
          :title="t('pages.view.title', {entity: entity.label})"
        >
          <entity-form-generator
            :key="`view-entity-${route.params.resource}-${route.params.id}`"
            :entity="data[0]"
            :fields="entity.schema"
            no-submit
          />
          <div class="d-flex">
            <slot name="view-entity--well-actions">
              <div>
                <slot name="view-entity--well-actions-left-prepend" />
                <slot name="view-entity--well-actions-left">
                  <b-button
                    class="mx-2 d-flex align-items-center"
                    variant="dark"
                    :to="{name: 'DataTableEntity', params: { resource: route.params.resource }}"
                  >
                    <b-icon
                      icon="arrow-left-circle"
                      variant="light"
                      class="mr-2"
                    />
                    {{ t('actions.back') }}
                  </b-button>
                </slot>
                <slot name="view-entity--well-actions-left-append" />
              </div>
              <div class="ml-auto">
                <slot name="view-entity--well-actions-right-prepend" />
                <slot name="view-entity--well-actions-right">
                  <b-button
                    class="mx-2"
                    variant="primary"
                    :to="{name: 'EditEntity', params: { resource: route.params.resource, id: route.params.id }}"
                  >
                    <b-icon
                      icon="pencil"
                      variant="light"
                      class="mr-2"
                    />
                    {{ t('actions.edit') }}
                  </b-button>
                  <b-button
                    class="mx-2"
                    :to="{name: 'CreateEntity', params: { resource: route.params.resource }}"
                  >
                    <b-icon
                      icon="plus-circle"
                      variant="light"
                      class="mr-2"
                    />
                    {{ t('actions.create') }}
                  </b-button>
                </slot>
                <slot name="view-entity--well-actions-right-append" />
              </div>
            </slot>
          </div>
        </well>
      </template>
    </entity-provider>
  </b-container>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
import Well from '@/components/Well'
import EntityFormGenerator from '@/components/EntityFormGenerator'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import usePermissions from '@/use/usePermissions'
import useViewEntity from '@/use/entities/useViewEntity'

export default {
  name: 'DefaultViewEntity',
  components: { Well, EntityFormGenerator, EntityProvider },
  props: {
    action: {
      type: String,
      default: 'read',
    },
  },
  setup (props) {
    const route = useRoute()
    const { t } = useI18n()

    usePermissions(props.action)
    const { entity } = useViewEntity()

    return {
      entity,
      route,
      t,
    }
  },
}
</script>
