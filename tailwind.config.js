/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#4a90e2',
          secondary: '#f0f2f5',
          accent: '#1a73e8',
        },
        dark: {
          background: '#1a202c',
          text: '#e2e8f0',
          primary: '#7928ca',
          secondary: '#2d3748',
          accent: '#9f7aea',
        },
      },
    },
  },
  plugins: [],
}

