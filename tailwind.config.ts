import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#141413",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#828179",
          dark: "#333333",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          dark: "#E6E6E6",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#000000",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#C4C3BB",
          dark: "#666666",
        },
        "muted-foreground": {
          DEFAULT: "#A3A299",
          dark: "#999999",
        },
        border: {
          DEFAULT: "#E6E4DD",
          dark: "#2A2A28",
        },
        input: {
          DEFAULT: "#F0EFEA",
          dark: "#2A2A28",
        },
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;