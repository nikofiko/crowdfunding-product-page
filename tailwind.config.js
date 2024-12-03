/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'com': ["Commissioner"]
      },
      colors: {
        'blue-button': 'hsl(176, 50%, 47%)',
        'dark-cyan': 'hsl(176, 72%, 28%)',
        'dark-grey': 'hsl(0, 0%, 48%)'
      }, spacing: {
        '22': '5.5rem', // 22 * 0.25rem = 5.5rem
      },
    },
  },
  plugins: [],
}

