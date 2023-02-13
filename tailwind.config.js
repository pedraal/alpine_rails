/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.html.erb',
    './app/components/**/*.rb',
    './test/components/previews/**/*.rb',
    './test/components/previews/**/*.html.erb',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
}
