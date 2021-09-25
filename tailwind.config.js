module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white:'var(--white)',
      black:'var(--black)',
      dark:'var(--dark)',
      light:'var(--light)',
      line:'var(--line)',
      line2:'var(--line2)',
      light2:'var(--light2)',
      green:'var(--green)',
      red:'var(--red)',
      brown1:'var(--brown1)',
      brown2:'var(--brown3)',
      brown3:'var(--brown3)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
