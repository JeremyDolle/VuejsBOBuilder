import features from '@/config/features.json'

export default {
  computed: Object.entries(features).reduce((acc, [featureName, value]) => {
    return {
      ...acc,
      [`${featureName}FeatureIsAvailable`] () {
        return value
      },
    }
  }, {}),
}
