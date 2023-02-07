export default function ui__accordion() {
  return {
    open: false,
    header: {
      '@click': function () {
        this.open = !this.open
      },
    },
    body: {
      'x-show': function () {
        return this.open
      },
      'x-collapse': '',
    },
  }
}
