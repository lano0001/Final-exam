/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // this targets your route components
  ],
  theme: {
    extend: {
      colors: {
        "accent-green": "#44d35",
        "primary-black": "#212121",
      },
    },
  },
  plugins: [],
};
