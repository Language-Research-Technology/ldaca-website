/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './content/**/*.{vue,js,ts,jsx,tsx,md}',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    // 80% equivalents of Tailwind's default breakpoints. This preserves
    // the responsive behaviour the site had when viewed at 80% browser zoom.
    screens: {
      sm: '512px',
      md: '614.4px',
      lg: '819.2px',
      xl: '1024px',
      '2xl': '1228.8px',
    },
    // Unified typography scale. All site text should use these named sizes
    // instead of one-off rem/px values. Values are backed by CSS variables
    // declared in .vitepress/theme/style.css so the scale has one source of truth.
    fontSize: {
      xs: ['var(--type-xs)', { lineHeight: '1rem' }],
      sm: ['var(--type-sm)', { lineHeight: '1.25rem' }],
      base: ['var(--type-base)', { lineHeight: '1.45rem' }],
      lg: ['var(--type-lg)', { lineHeight: '1.5rem' }],
      xl: ['var(--type-xl)', { lineHeight: '1.65rem' }],
      '2xl': ['var(--type-2xl)', { lineHeight: '1.85rem' }],
      '3xl': ['var(--type-3xl)', { lineHeight: '2.1rem' }],
      '4xl': ['var(--type-4xl)', { lineHeight: '2.45rem' }],
      '5xl': ['var(--type-5xl)', { lineHeight: '1.1' }],
      '6xl': ['3.25rem', { lineHeight: '1.05' }],
      '7xl': ['3.75rem', { lineHeight: '1.05' }],
      '8xl': ['4.5rem', { lineHeight: '1' }],
      '9xl': ['6rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
