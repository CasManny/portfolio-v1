/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      }
    },
    extend: {
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite"
      },
      keyframes: {
        "ping-large": {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}

