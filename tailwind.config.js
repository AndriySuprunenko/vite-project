/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('./src/assets/images/banner/lightbg.png')",
        'dark': "url('./src/assets/images/banner/darkbg.png')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
