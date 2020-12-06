import beforeEach from './beforeEach'
import beforeResolve from './beforeResolve'
import afterEach from './afterEach'

export default function (router) {
  router.beforeEach(beforeEach)

  router.beforeResolve(beforeResolve)

  router.afterEach(afterEach)
}
