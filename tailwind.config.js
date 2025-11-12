/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // pastikan scan semua file React
  ],

  theme: {
    extend: {
      fontFamily: {
    rubik: ['Rubik', 'sans-serif'],
    },

      colors: {
        // 🎨 Tambahan opsional — warna khas RZBAR
        brand: {
          yellow: '#FFD93B',
          dark: '#0f0f0f',
        },
      },

      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },

  plugins: [
    tailwindScrollbar, // custom scrollbar
  ],
};
