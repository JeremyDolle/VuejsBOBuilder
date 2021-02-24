import VueFormGenerator from 'vue-form-generator'
import Multiselect from 'vue-multiselect'
import FieldAddressInput from '@/components/fields/FieldAddressInput'
import FieldEntitySelect from '@/components/fields/FieldEntitySelect'
import FieldPhoneInput from '@/components/fields/FieldPhoneInput'
import FieldImageInput from '@/components/fields/FieldImageInput'
import VueTelInput from 'vue-tel-input'

export default function register (app) {
  app.component('multiselect', Multiselect)
  app.component('field-address-input', FieldAddressInput)
  app.component('field-entity-select', FieldEntitySelect)
  app.component('field-phone-input', FieldPhoneInput)
  app.component('field-image-input', FieldImageInput)

  app.use(VueTelInput)
  app.use(VueFormGenerator)
}
