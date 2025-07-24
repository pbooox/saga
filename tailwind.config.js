/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#d97706',
        blue: '#2563eb',
        green: '#047857',
        'text-primary': '#1e2b3b',
        'text-secondary': '#475569',
        'text-muted': '#334155',
        'border-color': '#e5e7eb',
      }
    },
  },
  plugins: [],
}
