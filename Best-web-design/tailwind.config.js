/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg-primary': '#ffffff',
        'light-bg-secondary': '#f3f4f6',
        'light-text-primary': '#1f2937',
        'light-text-secondary': '#4b5563',
        
        // Dark mode colors
        'dark-bg-primary': '#121212',
        'dark-bg-secondary': '#1e1e1e',
        'dark-text-primary': '#f3f4f6',
        'dark-text-secondary': '#d1d5db',
        
        // Accent colors
        'primary': '#FF7F50',
        'primary-dark': '#FF6B3D',
        'secondary': '#4F46E5',
        'secondary-dark': '#4338CA',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 