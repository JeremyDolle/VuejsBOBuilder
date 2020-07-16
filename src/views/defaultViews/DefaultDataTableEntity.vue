<template>
  <well class="h-100 data-table">
    <template #header>
      <div class="data-table-header">
        <slot name="data-table--well-header-prepend" />

        <slot
          name="data-table--well-header"
          v-bind="slotDataTableWellHeader"
        >
          <span>{{ entity.label }} - Liste</span>
          <b-link :to="{ name: 'CreateEntity', params: { resource: $route.params.resource } }">
            <b-icon
              icon="plus-circle"
              class="icon ml-auto text-secondary"
            />
          </b-link>
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
                :sticky-header="true"
                :items="entities"
                :fields="[...entity.schema.map(field => field.key), 'actions']"
                class="h-100"
                responsive
              >
                <template #cell()="data">
                  <table-entity-cell
                    :key="data.item.id"
                    :schema="entity.schema"
                    :field="data"
                  />
                </template>
                <template #cell(actions)="data">
                  <div class="data-table-actions">
                    <b-link
                      v-b-tooltip.hover="'Edit'"
                      class="data-table-action"
                      :to="{
                        name: 'EditEntity',
                        params: { resource: $route.params.resource, id: data.item.id }
                      }"
                    >
                      <b-icon icon="pencil" />
                    </b-link>
                    <b-link
                      v-b-tooltip.hover="'Supprimer'"
                      class="data-table-action"
                      href="#"
                      @click.prevent="() => deleteEntity(data.item.id)"
                    >
                      <b-icon icon="trash" />
                    </b-link>
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
import { DefaultDataTableEntityMixin } from '@/mixins'

export default {
  name: 'DefaultDataTableEntity',
  components: { Well, EntityProvider, TableEntityCell },
  mixins: [DefaultDataTableEntityMixin],
}
</script>
