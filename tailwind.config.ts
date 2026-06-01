import type { Config } from "tailwindcss";

const config: Config = {
  // Tell Tailwind which files to scan for class names
  // This prevents unused CSS from being included in production
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette for our futuristic dark theme
      colors: {
        // Background layers — we use multiple dark shades for depth
        bg: {
          base: "#080c14",      // Deepest background (page bg)
          surface: "#0d1117",   // Card surfaces
          elevated: "#161b27",  // Hover/elevated state
          border: "#1e2533",    // Subtle borders
        },
        // Accent colors — the "glow" palette
        accent: {
          blue: "#3b82f6",      // Primary accent
          "blue-glow": "#1d4ed8",
          purple: "#8b5cf6",    // Secondary accent
          cyan: "#06b6d4",      // Tertiary accent
          green: "#10b981",     // Success/streak
        },
        // Text hierarchy
        text: {
          primary: "#f0f4ff",
          secondary: "#8892a4",
          muted: "#4a5568",
        },
      },
      // Custom font family
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      // Custom animations for skeleton loaders
      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "from": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.1)" },
          "to": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
        },
      },
      // Custom grid for Bento layout
      gridTemplateColumns: {
        "bento": "repeat(12, 1fr)",
      },
      // Background gradients as utilities
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
