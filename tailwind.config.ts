// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "mystic-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "mystic-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        "aura-glow": {
          "0%": { boxShadow: "0 0 0 rgba(244,213,141,0.0)" },
          "50%": { boxShadow: "0 0 32px rgba(244,213,141,0.55)" },
          "100%": { boxShadow: "0 0 0 rgba(244,213,141,0.0)" },
        },
      },
      animation: {
        "mystic-float": "mystic-float 7s ease-in-out infinite",
        "mystic-pulse": "mystic-pulse 8s ease-in-out infinite",
        "star-twinkle": "star-twinkle 4s ease-in-out infinite",
        "aura-glow": "aura-glow 5s ease-in-out infinite",
      },
      boxShadow: {
        mystic: "0 0 22px rgba(124,58,237,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
