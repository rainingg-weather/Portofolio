/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        hogwarts: {
          dark: "#07080c",
          darker: "#040507",
          card: "#0d1017",
          cardHover: "#131824",
          border: "rgba(197, 160, 89, 0.22)",
          borderBright: "rgba(212, 175, 55, 0.5)",
          gold: "#c5a059",
          goldBright: "#f5e6be",
          goldGlow: "#d4af37",
          goldDark: "#705423",
          cyan: "#38bdf8",
          cyanBright: "#00e5ff",
          cyanGlow: "#06b6d4",
          parchment: "#e8e1d1",
          parchmentMuted: "#a8a092",
          muted: "#788291",
        },
        aster: {
          coral: "#eb6165",
          dark: "#18181b",
          darker: "#0d0d10",
          muted: "#bab3e2",
        },
        pop: {
          cream: "#f5f3ec",
          sand: "#f4f0e8",
          creamdeep: "#ece8dd",
          ink: "#141418",
          inksoft: "#52525e",
          peach: "#ffb38a",
          peachdeep: "#e07a3f",
          lavender: "#b8a7f5",
          lavenderdeep: "#8a76e8",
          mint: "#9de5c4",
          mintdeep: "#0ea678",
          lemon: "#ffe38a",
          lemondeep: "#d9a406",
          pink: "#ff9ec7",
          pinkdeep: "#f0569b",
          coral: "#eb6165",
          coraldeep: "#d94a4e",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', 'Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        lineGrow: "lineGrow 0.6s cubic-bezier(0.3, 0, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
}
