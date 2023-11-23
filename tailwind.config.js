/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text-grey': '#65665C',
        'text-dark-grey': '#2A2C1F',
        'base-grey': '#81929B',
        'active-link': '#3AA7CD',
        'dark-blue': '#172E49',
        'white-blue': '#A8E9FF',
        'input-bg': '#F3F3F3',
        'page-bg': '#EAEDEE',
        'error': '#E0473D',
        'input-border': 'rgba(0, 0, 0, 0.06)'
      },
      fontFamily: {
        'manrope': ['Manrope'],
        'montserrat': ['Montserrat'],
      },
      margin: {
        'page': '3rem',
        'page-mobile': '1.5rem'
      },
      padding: {
        'page': '3rem',
        'page-mobile': '1.5rem'
      },
      boxShadow: {
        '3xl': '0 6px 9px rgba(0, 0, 0, 0.35)',
        'active-button': [
          '0px 4px 20px 0px rgba(58, 167, 205, 0.20)'
        ],
        'form-shadow': [
            '0px 18px 41px 0px rgba(0, 0, 0, 0.10);'
        ]
      },
      height: {
        'nav-height': '91vh',
        'nav-height-content': 'calc(100% - 10rem)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        'cus': '90px, 1fr 1fr',

        // Complex site-specific row configuration
      }
    },
  },
  plugins: [],
}
