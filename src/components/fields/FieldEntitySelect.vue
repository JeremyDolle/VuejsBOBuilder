<template>
    <entity-provider
        :entity="schema.inputType"
        :module="schema.inputType"
    >
        <template #default="{data, isLoading, isError}">
            <b-spinner v-if="isLoading" variant="secondary"/>
            <div v-else-if="isError">{{isError}}</div>
            <template v-else>
                <!-- If edit -->
                <entity-provider
                    v-if="model[schema.key]"
                    :entity="schema.inputType"
                    :module="schema.inputType"
                    :id="model[schema.key]"
                >
                    <template #default="{data: entity, isLoading: entityLoading, isError: entityError}">
                        <b-spinner v-if="entityLoading" variant="secondary"/>
                        <div v-else-if="entityError">{{entityError}}</div>
                        <multiselect
                            v-else-if="entity"
                            v-model="entity[0]"
                            deselect-label="Can't remove this value"
                            track-by="id"
                            label="title"
                            placeholder="Select one"
                            :options="data"
                            :allow-empty="false"
                            @input="updateModelValue($event.id)"
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
                    placeholder="Select one"
                    :options="data"
                    :allow-empty="false"
                    @input="updateModelValue($event.id)"
                />
            </template>
        </template>
    </entity-provider>
</template>

<script>
import { abstractField } from 'vue-form-generator'
import EntityProvider from '@/components/EntityProvider'

export default {
  name: 'FieldEntitySelect',
  components: { EntityProvider },
  mixins: [abstractField],
}
</script>
