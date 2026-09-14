/** @type {import('tailwindcss').Config} */
// Colors read CSS variables so the same classes work in light and dark (see app/css/globals.css).
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./app/**/*.{js,jsx}", "./utils/**/*.js"],
  theme: {
    extend: {
      colors: {
        paper: v("paper"),
        ink: v("ink"),
        muted: v("muted"),
        accent: v("accent"),
        wash: v("wash"),
      },
      borderColor: { DEFAULT: "rgb(var(--ink) / 0.12)" },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "76rem" },
      keyframes: {
        rise: { from: { opacity: 0, transform: "translateY(14px)" }, to: { opacity: 1, transform: "none" } },
      },
      animation: { rise: "rise .7s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
