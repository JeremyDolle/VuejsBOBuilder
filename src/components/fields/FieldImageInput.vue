<template>
  <div class="d-flex align-items-center">
    <div
      @mouseover="show=true"
      @mouseleave="show = false"
    >
      <b-overlay
        :show="show"
        class=" mr-2"
      >
        <template #overlay>
          <b-icon
            role="button"
            icon="x-square-fill"
            variant="danger"
            @click="clear"
          />
        </template>
        <template #default>
          <div>
            <b-img-lazy
              v-if="value !== '' && defaultImg && !hasFormVal"
              height="50"
              width="50"
              class="fit-cover"
              :src="defaultImg"
            />
            <file-to-base64
              v-if="hasFormVal && value !== ''"
              :file="value"
            >
              <template #default="{isLoading, data}">
                <div>
                  <b-spinner
                    v-if="isLoading"
                    variant="secondary"
                  />
                  <b-img-lazy
                    v-else
                    height="50"
                    width="50"
                    class="fit-cover mr-2"
                    :src="data"
                  />
                </div>
              </template>
            </file-to-base64>
          </div>
        </template>
      </b-overlay>
    </div>

    <b-form-file
      ref="file-input"
      class="w-100 mr-3"
      placeholder="Choisissez un fichier"
      browse-text="Rechercher"
      @input="update($event)"
    />
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'
import FileToBase64 from '@/components/FileToBase64'

export default {
  name: 'FieldImageInput',
  components: { FileToBase64 },
  mixins: [abstractField],
  data () {
    return {
      show: false,
      defaultImg: null,
      hasFormVal: false,
    }
  },
  mounted () {
    this.defaultImg = this.value
  },
  methods: {
    update ($event) {
      this.hasFormVal = !!$event
      this.updateModelValue($event)
    },
    clear () {
      this.$refs['file-input'].reset()
      this.updateModelValue('')
    },
  },
}
</script>
