/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html", "./*.js"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                sans: ["Source Sans Pro", "sans-serif"],
            },
        },
    },
};

