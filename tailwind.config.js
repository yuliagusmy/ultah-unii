/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matcha: {
          light: '#d4e4c8',
          DEFAULT: '#a6c97e',
          dark: '#7ba65a',
        },
        pastel: {
          pink: '#ffd1dc',
          blue: '#c1e3ff',
          cream: '#fff5e1',
          yellow: '#fffacd',
        },
      },
      fontFamily: {
        cute: ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'blink': 'blink 3s infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'falling': 'falling 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        falling: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};