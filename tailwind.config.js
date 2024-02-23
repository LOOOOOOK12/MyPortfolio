/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Text':'#001317',
        'Background':'#F7FBFC',
        'Primary':'#47AAC6',
        'Secondary':'#88D2E7',
        'Accent':'#4CC8EB'
      }
    },
  },
  plugins: [],
}

