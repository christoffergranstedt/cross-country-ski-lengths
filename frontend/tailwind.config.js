module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}