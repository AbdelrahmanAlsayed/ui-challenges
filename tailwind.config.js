/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '.4rem',
          sm: '.5rem',
          md: '.6rem',
          lg: '.7rem',
          xl: '.8rem',
        },
      },
    },
  },
  plugins: [],
};
