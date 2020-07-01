import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import Multiselect from 'vue-multiselect'
import FieldAddressInput from '@/components/fields/FieldAddressInput'
import FieldEntitySelect from '@/components/fields/FieldEntitySelect'
import FieldPhoneInput from '@/components/fields/FieldPhoneInput'
import VueTelInput from 'vue-tel-input'

Vue.component('multiselect', Multiselect)
Vue.component('field-address-input', FieldAddressInput)
Vue.component('field-entity-select', FieldEntitySelect)
Vue.component('field-phone-input', FieldPhoneInput)

Vue.use(VueTelInput)
Vue.use(VueFormGenerator)
