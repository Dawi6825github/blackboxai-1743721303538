module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      },
      colors: {
        primary: {
          light: '#f0f9ff',
          DEFAULT: '#0369a1',
          dark: '#0c4a6e'
        },
        secondary: {
          light: '#f5f3ff',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6'
        }
      }
    },
  },
  plugins: [],
}