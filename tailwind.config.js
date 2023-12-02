/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "6/10": "60%",
        "4/10": "40%",
        "3/10": "30%",
      },
      letterSpacing: {
        evenWider: "0.5em",
      },
    },
  },
  plugins: [],
};
