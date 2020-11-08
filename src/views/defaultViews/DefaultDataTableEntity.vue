<template>
  <well class="h-100 data-table">
    <template #header>
      <div class="data-table-header">
        <slot name="data-table--well-header-prepend" />

        <slot
          name="data-table--well-header"
          v-bind="slotDataTableWellHeader"
        >
          <span>{{ $t('pages.list.title', {entity: entity.label}) }}</span>
          <can
            action="delete"
            :resource="$route.params.resource"
          >
            <template #default="{ allowed }">
              <div v-b-tooltip.hover="allowed ? $t('actions.create') : $t('actions.not_allowed')">
                <b-link
                  :disabled="!allowed"
                  :to="{ name: 'CreateEntity', params: { resource: $route.params.resource } }"
                >
                  <b-icon
                    icon="plus-circle"
                    class="icon ml-auto text-secondary"
                  />
                </b-link>
              </div>
            </template>
          </can>
        </slot>

        <slot name="data-table--well-header-append" />
      </div>
    </template>
    <slot name="data-table-default-prepend" />

    <entity-provider
      v-if="entity"
      :key="entity.name"
      :entity="entity.name"
      :module="entity.name"
      :page="page"
    >
      <template #default="{ data: entities, isLoading, isError, total }">
        <div v-if="isError">
          {{ isError }}
        </div>
        <div
          v-else-if="isLoading"
          class="w-100 text-center"
        >
          <b-spinner variant="secondary" />
        </div>
        <template v-else>
          <slot v-bind="{ entities }">
            <div class="b-table-sticky-header h-100 mb-0">
              <b-table
                sticky-header
                show-empty
                :items="entities"
                :fields="[...entity.schema.map(({key, label}) => ({key, label})), 'actions']"
                class="h-100"
                responsive
              >
                <template #empty>
                  <empty-message />
                </template>
                <template #cell()="data">
                  <table-entity-cell
                    :key="data.item._id"
                    :schema="entity.schema"
                    :field="data"
                  />
                </template>
                <template #cell(actions)="data">
                  <div class="data-table-actions">
                    <can
                      action="delete"
                      :resource="$route.params.resource"
                    >
                      <template #default="{ allowed }">
                        <div v-b-tooltip.hover="allowed ? $t('actions.edit') : $t('actions.not_allowed')">
                          <b-link
                            :disabled="!allowed"
                            class="data-table-action"
                            :to="{
                              name: 'EditEntity',
                              params: { resource: $route.params.resource, id: data.item._id }
                            }"
                          >
                            <b-icon icon="pencil" />
                          </b-link>
                        </div>
                      </template>
                    </can>
                    <can
                      action="delete"
                      :resource="$route.params.resource"
                    >
                      <template #default="{ allowed }">
                        <div v-b-tooltip.hover="allowed ? $t('actions.edit') : $t('actions.not_allowed')">
                          <b-link
                            :disabled="!allowed"
                            class="data-table-action"
                            href="#"
                            @click.prevent="() => deleteEntity(data.item._id)"
                          >
                            <b-icon icon="trash" />
                          </b-link>
                        </div>
                      </template>
                    </can>
                  </div>
                </template>
              </b-table>
              <b-pagination
                v-model="page"
                :total-rows="total"
                :per-page="10"
                class="m-1"
                pills
              />
            </div>
          </slot>
        </template>
      </template>
    </entity-provider>
    <slot name="data-table-default-append" />
  </well>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
import Well from '@/components/Well'
import TableEntityCell from '@/components/TableEntityCell'
import { DefaultDataTableEntityMixin, PermissionsMixin } from '@/mixins'
import EmptyMessage from '@/components/EmptyMessage'
import Can from '@/components/Can'

export default {
  name: 'DefaultDataTableEntity',
  components: { Can, EmptyMessage, Well, EntityProvider, TableEntityCell },
  mixins: [DefaultDataTableEntityMixin, PermissionsMixin],
  props: {
    action: {
      type: String,
      default: 'read',
    },
  },
}
</script>
