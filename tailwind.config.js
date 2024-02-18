/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#001524",
        secondary: "#445D48",
        third: "#D6CC99",
        fourth: "#FDE5D4",
      },
    },
  },
  plugins: [require("daisyui")],
};
