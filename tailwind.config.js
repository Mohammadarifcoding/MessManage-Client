/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#393E46",
        third: "#00ADB5",
        fourth: "#141515",
      },
    },
  },
  plugins: [require("daisyui")],
};
