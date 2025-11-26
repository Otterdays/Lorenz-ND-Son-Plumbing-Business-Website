import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/data/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1E3F",
        gold: "#C89B3C",
        cream: "#F9F4EA",
        slate: "#1F2A44",
        accent: "#3F7CAC",
        success: "#1CA674"
      },
      fontFamily: {
        heading: ["\"Playfair Display\"", "serif"],
        body: ["\"Source Sans Pro\"", "system-ui", "sans-serif"]
      },
      boxShadow: {
        badge: "0 20px 35px rgba(11, 30, 63, 0.18)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;

