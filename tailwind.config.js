/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: {
          primary: "#F9F7F7",
          dominant: "#DBE2EF",
          secondary: "#3F72AF",
          accent: "#112D4E",
        },
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif']
      }
    },
  },
  plugins: [],
}
