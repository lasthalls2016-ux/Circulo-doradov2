import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070F1E",
          900: "#0A1628",
          800: "#122341",
          700: "#1A3358",
          600: "#234270",
        },
        sky: {
          400: "#6FB7E8",
          300: "#96CCEF",
          200: "#C4E2F7",
        },
        gold: {
          500: "#C79A2B",
          400: "#D9AF44",
          300: "#E8C766",
          100: "#F7ECC9",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(7, 15, 30, 0.35)",
        card: "0 10px 30px -12px rgba(7, 15, 30, 0.25)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(111,183,232,0.16), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
