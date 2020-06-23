<template>
  <well
    :title="entity.name"
    class="h-100 data-table"
  >
    <template #header>
      <div class="data-table-header">
        <slot
          name="data-table--well-header"
          v-bind="slotDataTableWellHeader"
        >
          <span>{{ entity.name }}</span>
          <b-link :to="{ name: 'CreateEntity', params: { resource: $route.params.resource } }">
            <b-icon
              icon="plus-circle"
              class="icon ml-auto text-secondary"
            />
          </b-link>
        </slot>
      </div>
    </template>

    <entity-provider
      v-if="entity"
      :key="entity.name"
      :entity="entity.name"
      :module="entity.name"
    >
      <template #default="{data, isLoading, isError}">
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
          <slot>
            <b-table
              sticky-header
              :items="data"
              :fields="[...entity.schema.map(field => field.key), 'actions']"
              class="h-100"
            >
              <template #cell()="data">
                <table-cell
                  :key="data.item.id"
                  :schema="entity.schema"
                  :field="data"
                />
              </template>
              <template #cell(actions)="data">
                <div class="data-table-actions">
                  <b-link
                    class="data-table-action"
                    :to="{
                      name: 'EditEntity',
                      params: { resource: $route.params.resource, id: data.item.id }
                    }"
                  >
                    <b-icon icon="pencil" />
                  </b-link>
                  <b-link
                    class="data-table-action"
                    href="#"
                    @click.prevent="() => deleteEntity(data.item.id)"
                  >
                    <b-icon icon="trash" />
                  </b-link>
                </div>
              </template>
            </b-table>
          </slot>
        </template>
      </template>
    </entity-provider>
  </well>
</template>

<script>
import EntityProvider from '@/components/EntityProvider'
import Well from '@/components/Well'
import TableCell from '@/components/TableEntityCell'
import { DefaultDataTableEntityMixin } from '@/mixins'

export default {
  name: 'DefaultDataTableEntity',
  components: { Well, EntityProvider, TableCell },
  mixins: [DefaultDataTableEntityMixin],
}
</script>
