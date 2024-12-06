/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Supports the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        hatsa: '#0A344F', // Add your custom color
      },
      animation: {
        blinking: 'blink-caret 0.65s step-end infinite', // Fixed typo and removed extra semicolon
      },
      keyframes: {
        'blink-caret': {
          '0%, 100%': { borderColor: 'transparent' }, // Adjusted syntax for modern JS
          '50%': { borderColor: '#000' }, // Use Tailwind's color system
        },
      },
    },
  },
  plugins: [],
};
