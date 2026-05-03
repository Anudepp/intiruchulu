/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fad7a5',
          300: '#f6ba6d',
          400: '#f19432',
          500: '#ee7a10',
          600: '#df6009',
          700: '#b9480a',
          800: '#933910',
          900: '#773110',
        },
        spice: {
          50: '#fdf4ef',
          100: '#fbe6d6',
          200: '#f6c9ab',
          300: '#efa376',
          400: '#e87742',
          500: '#e35a1f',
          600: '#d14416',
          700: '#ae3315',
          800: '#8b2b18',
          900: '#712517',
        },
        leaf: {
          50: '#f0fdf0',
          100: '#dcfcdc',
          200: '#bbf7bb',
          300: '#86ef86',
          400: '#4ade4a',
          500: '#22c522',
          600: '#16a316',
          700: '#158015',
          800: '#166516',
          900: '#145414',
        },
      },
      fontFamily: {
        telugu: ['Noto Sans Telugu', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
