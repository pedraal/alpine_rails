import AsyncAlpine from 'async-alpine'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import { identifierForGlobKey } from '../utils/identifier_for_glob_key'
import tooltip from '../directives/tooltip'

Alpine.plugin(collapse)
AsyncAlpine.init(Alpine)

for (const [name, component] of Object.entries(import.meta.glob('../../components/**/*.js')))
  AsyncAlpine.data(identifierForGlobKey(name), () => component())

AsyncAlpine.start()

Alpine.directive('tooltip', tooltip)

Alpine.start()
