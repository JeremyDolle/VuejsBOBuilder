import features from '@/config/features.json'

export default function useFeatures () {
  return Object.entries(features).reduce((acc, [featureName, value]) => {
    return {
      ...acc,
      [`${featureName}FeatureIsAvailable`] () {
        return value
      },
    }
  }, {})
}
