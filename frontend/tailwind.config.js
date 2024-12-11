/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        green: {
          100: "34c759",
        },
      },
    },
  },
  plugins: [],
};
