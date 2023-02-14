export function identifierForGlobKey(key) {
  const CONTROLLER_FILENAME_REGEX = /^(?:.*?(?:controllers|components)\/|\.?\.\/)?(.+)(?:[/_-](controller|component)\..+?)$/
  const logicalName = (key.match(CONTROLLER_FILENAME_REGEX) || [])[1]
  if (logicalName)
    return logicalName.replace(/\//g, '__')
}
