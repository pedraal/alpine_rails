export default function ui__dropdown() {
  return {
    open: false,
    trigger: {
      '@click': function () {
        this.open = !this.open
      },
      '@mousedown.outside': function () {
        this.open = false
      },
    },
    menu: {
      'x-show': function () {
        return this.open
      },
      'x-transition': '',
      // 'x-collapse': '',
    },
  }
}
