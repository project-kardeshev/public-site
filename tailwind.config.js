/** @type {import('tailwindcss').Config} */
import { kebabCase } from 'lodash';

import { color } from './tokens/tokens.js';

const colors = Object.fromEntries(
  Object.entries(color.color.value).map(([attribute, value]) => [
    kebabCase(attribute),
    value,
  ]),
);
console.log(colors);
export default {
  content: ['index.html', 'src/**/**/*.{html,tsx}'],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    extend: {
      fontFamily: {
        diablo: ['"Diablo Heavy"', 'sans-serif'], // Fallback font is sans-serif
        sans: ['Inter', 'sans-serif'],
      },
    },
    colors,
  },
  plugins: [require('tailwindcss-animate')],
};
