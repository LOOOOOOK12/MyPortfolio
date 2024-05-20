/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#dfebf9',
        'background': '#050d18',
        'primary': '#8bb3eb',
        'secondary': '#301889',
        'accent': '#763bdd',
      },
    },
  },
  plugins: [],
}

