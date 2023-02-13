import AsyncAlpine from 'async-alpine'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import tooltip from '../directives/tooltip'

Alpine.plugin(collapse)
AsyncAlpine.init(Alpine)

for (const [name, component] of Object.entries(import.meta.glob('../../components/**/*.js')))
  AsyncAlpine.data(identifierForGlobKey(name), () => component())

AsyncAlpine.start()

Alpine.directive('tooltip', tooltip)

Alpine.start()

function identifierForGlobKey(key) {
  const CONTROLLER_FILENAME_REGEX = /^(?:.*?(?:controllers|components)\/|\.?\.\/)?(.+)(?:[/_-](controller|component)\..+?)$/
  const logicalName = (key.match(CONTROLLER_FILENAME_REGEX) || [])[1]
  if (logicalName)
    return logicalName.replace(/\//g, '__')
}
