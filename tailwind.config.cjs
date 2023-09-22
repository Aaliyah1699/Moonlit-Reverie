/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                playFair: ['Playfair Display', 'serif'],
                britney: ['Britney', 'cursive'],
            },
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: ['autumn', 'coffee'],
    },
};
