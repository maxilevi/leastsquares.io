module.exports = {
  purge: {
    content: [
        './components/**/*.js',
        './pages/**/*.js',
    ],
    enabled: false
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui'),
      require('@tailwindcss/typography')
  ],
}