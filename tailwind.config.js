/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: '#1F2B27',
          deep: '#172019',
          raised: '#26342F'
        },
        chalk: {
          DEFAULT: '#F2EFE6',
          dust: '#5C6B66',
          line: '#3A4843'
        },
        x: {
          DEFAULT: '#6FA8DC',
          soft: '#6FA8DC26'
        },
        o: {
          DEFAULT: '#E8896B',
          soft: '#E8896B26'
        }
      },
      fontFamily: {
        marker: ['Caveat', 'cursive'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
