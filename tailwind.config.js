/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-ogange-active': '#F1897B',
        'custom-gray-dark': '#515773',
        'custom-blue-deep': '#161926',
        'custom-bg-tranparent-l': 'rgba(255, 255,255,0.2)',
        'custom-bg-tranparent-d': 'rgba(22, 25, 38, 0.2)',
      },
      backgroundImage: {
        'light': "url('./src/assets/images/banner/lightbg.png')",
        'dark': "url('./src/assets/images/banner/darkbg.png')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
