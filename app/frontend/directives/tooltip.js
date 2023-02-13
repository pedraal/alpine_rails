export default (el, { expression, value, modifiers }) => {
  const tooltip = document.createElement('div')
  const attributes = [
    ['x-ignore', ''],
    ['ax-load', ''],
    ['x-data', 'ui__tooltip'],
    ['x-cloak', ''],
    ['x-bind', 'tooltip'],
    ['id', 'tooltip'],
    ['role', 'tooltip'],
    ['data-target', el.id],
  ]

  const placement = parsePlacement(value)
  const offset = parseOffset(modifiers)
  if (placement)
    attributes.push(placement)
  if (offset)
    attributes.push(offset)

  attributes.forEach((attr) => {
    tooltip.setAttribute(...attr)
  })
  tooltip.innerText = expression

  document.body.appendChild(tooltip)
}

function parseOffset(modifiers) {
  const offsetModifier = modifiers.find(m => m.startsWith('offset-'))

  if (!offsetModifier)
    return

  return ['data-offset', offsetModifier.replace('offset-', '')]
}

function parsePlacement(value) {
  if (!['top', 'bottom', 'left', 'right'].includes(value))
    return

  return ['data-placement', value]
}
