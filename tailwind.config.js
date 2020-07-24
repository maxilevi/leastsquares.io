module.exports = {
  purge: {
    content: [
        './components/**/*.js',
        './pages/**/*.js',
    ],
    enabled: true
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