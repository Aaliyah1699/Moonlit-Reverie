/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                playFair: ['Playfair Display', 'serif'],
                britney: ['Britney', 'cursive'],
                bonny: ['Bonny', 'serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['autumn', 'coffee', 'halloween', 'bumblebee'],
    },
};
