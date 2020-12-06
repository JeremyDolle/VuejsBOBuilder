
export default function (configName, defaultConfig) {
  return {
    needPermissions: {
      create: [`create_${configName}s`],
      read: [`read_${configName}s`],
      update: [`update_${configName}s`],
      delete: [`delete_${configName}s`],
      ...defaultConfig,
    },
  }
}
