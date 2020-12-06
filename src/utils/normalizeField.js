import i18n from '@/i18n'

export default function (field) {
  return {
    model: field.key,
    type: 'input',
    inputType: 'text',
    label: i18n.t(`fields.${field.key}.label`),
    placeholder: i18n.t(`fields.${field.key}.placeholder`),
    ...field,
  }
}
