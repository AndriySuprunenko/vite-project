/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Lato'],
      'serif': ['Playfair Display'],
    },
    extend: {
      colors: {
        'custom-ogange-active': '#F1897B',
        'custom-green-line': '#85BBB1',
        'custom-red-dark': '#E54F3A',
        'custom-gray-dark': '#515773',
        'custom-gray-light': '#E4E4E4',
        'custom-gray-text': '#262A3F',
        'custom-blue-deep': '#161926',
        'custom-bg-tranparent-l': 'rgba(255, 255,255,0.2)',
        'custom-bg-tranparent-l-2': 'rgba(255, 255,255,0.9)',
        'custom-green-neon': '#53F3CD',
        'custom-green-neon-dark': '#02E0AB',
        'bg-gray-gradient': 'rgb(244, 248, 247)',
        // Button shadow
        'custom-button-shadow-l': 'rgba(241, 137, 123 , 0.25)',
        'custom-button-shadow-l-active': 'rgba(229, 79, 58, 0.25)',
        'custom-button-shadow-d': 'rgba(83, 243, 205, 0.25)',
        'custom-button-shadow-d-active': 'rgba(2, 224, 171, 0.25)',
        // Text
        'custom-bg-tranparent-d': 'rgba(22, 25, 38, 0.2)',
        'custom-bg-tranparent-d-2': 'rgba(22, 25, 38, 0.9)',
        'custom-text-green': '#85BBB1',
        'custom-text-blue': '#689FF2',
        'custom-text': '#262A3F',
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
