/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F7',
        canvas: '#F7F7F7',
        ink: {
          DEFAULT: '#0B0B0B',
          secondary: '#3A3A3A',
          muted: '#707070',
          soft: '#A3A3A3',
        },
        accent: {
          DEFAULT: '#F26B1D',
          hover: '#DB5A10',
          light: '#FFF4ED',
          glow: 'rgba(242, 107, 29, 0.18)',
        },
        line: '#E6E6E6',
        chip: '#F2F2F2',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'sm-card': '14px',
      },
      boxShadow: {
        'card': '0 4px 24px -2px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 16px 36px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'subtle': '0 1px 3px rgba(0,0,0,0.05)',
        'float': '0 24px 48px -12px rgba(0, 0, 0, 0.14)',
        'glow-accent': '0 0 24px rgba(242, 107, 29, 0.28)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
