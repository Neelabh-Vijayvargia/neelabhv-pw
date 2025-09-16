// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // UT-themed colors (warm beige background)
        'primary-bg': '#2A2A2A',     // Warm beige with soft orange undertone
        'secondary-bg': '#383838',   // Slightly darker beige for contrast
        'accent-1': '#D9732D',       // UT light burnt orange
        'accent-2': '#BF5700',       // UT official burnt orange (strong)
        'accent-soft': '#F1B085',    // Soft tint for hovers
        'text-primary': '#F3F4F6',   // Gray-800 for readability
        'text-secondary': '#9CA3AF', // Gray-600 muted text
        'ut-ring': '#D9732D',        // Focus ring color
      },
      fontFamily: {
        // MODIFICATION: Set JetBrains Mono as the default sans-serif font
        sans: ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // The mono utility will also use JetBrains Mono, which is fine.
        // You can keep it explicit or rely on sans being JetBrains Mono now.
        // For clarity, keeping it explicit:
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      animation: { // Your existing animations
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: { // Your existing keyframes
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    }
  },
  plugins: [
    // require('tailwind-scrollbar'), // If you added this
  ],
}