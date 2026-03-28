/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        beige:        '#F0E0C7',
        'copper-dark': '#6B2F1E',
        'copper-mid':  '#934829',
        'copper-light':'#AF7127',
        'copper-border':'#9B7A73',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans:  ['Satoshi', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
