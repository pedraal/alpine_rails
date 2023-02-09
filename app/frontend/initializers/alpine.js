import AsyncAlpine from 'async-alpine'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)
AsyncAlpine.init(Alpine)

// for (const [name, component] of Object.entries(import.meta.glob('../../components/**/*.js')))
//   AsyncAlpine.data(identifierForGlobKey(name), () => component())

for (const [name, component] of Object.entries(import.meta.glob('../../components/**/*.js'))) {
  const componentFunction = () => {
    return component
  }
  AsyncAlpine.data(identifierForGlobKey(name), () => componentFunction())
}

AsyncAlpine.start()
Alpine.start()

function identifierForGlobKey(key) {
  const CONTROLLER_FILENAME_REGEX = /^(?:.*?(?:controllers|components)\/|\.?\.\/)?(.+)(?:[/_-](controller|component)\..+?)$/
  const logicalName = (key.match(CONTROLLER_FILENAME_REGEX) || [])[1]
  if (logicalName)
    return logicalName.replace(/\//g, '__')
}
