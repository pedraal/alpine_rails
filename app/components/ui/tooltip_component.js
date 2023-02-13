import { computePosition, flip, offset, shift } from '@floating-ui/dom'

export default function ui__tooltip() {
  return {
    show: false,
    placement: this.$el.dataset.placement || 'bottom',
    offset: parseInt(this.$el.dataset.offset) || 6,
    target: this.$el.dataset.target,
    tooltip: {
      ':style': function () {
        return {
          'display': this.show ? 'block' : 'none',
          'width': 'max-content',
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'background': '#222',
          'color': 'white',
          'font-weight': 'bold',
          'padding': '5px',
          'border-radius': '4px',
          'font-size': '90%',
        }
      },
    },
    init() {
      const target = document.querySelector(this.target)
      const events = [['mouseenter', true], ['mouseleave', false], ['focus', true], ['blur', false]]
      events.forEach(([event, value]) => {
        target.addEventListener(event, () => {
          this.show = value
          if (this.show)
            this.renderTooltip()
        })
      })
    },
    renderTooltip() {
      const target = document.querySelector(this.target)
      const tooltip = this.$el
      computePosition(target, tooltip, {
        placement: this.placement,
        middleware: [
          offset(this.offset),
          flip(),
          shift({ padding: 5 }),
        ],
      }).then(({ x, y }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
        })
      })
    },
  }
}
