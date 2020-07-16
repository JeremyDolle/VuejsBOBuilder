export default function (field) {
  return {
    model: field.key,
    type: 'input',
    inputType: 'text',
    ...field,
  }
}
