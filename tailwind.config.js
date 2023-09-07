/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'blue-400': '#3294F8',

      'gray-100': '#E7EDF4',
      'gray-150': '#C4D4E3',
      'gray-200': '#AFC2D4',
      'gray-300': '#7B96B2',
      'gray-400': '#3A536B',
      'gray-500': '#1C2F41',
      'gray-600': '#112131',
      'gray-700': '#0B1B2B',
      'gray-800': '#071422',
      'gray-900': '#040F1A',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
