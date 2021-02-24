import i18n from '@/i18n'

export default function (configName) {
  return {
    name: configName,
    label: i18n.global.t(`sidebar.${configName}.label`),
    description: i18n.global.t(`app.description.${configName}`),
    url: `/${configName}`,
  }
}
