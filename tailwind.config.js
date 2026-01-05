/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9500",
        primaryHover: "#e68600",
        studentBg:"#f5f6f7",
        background: "#FFFFFF",
        section: "#FAFAFA",
        textPrimary: "#1F2937",
        textMuted: "#6B7280",
        border: "#E5E7EB",
      }
    },
  },
  plugins: [],
}