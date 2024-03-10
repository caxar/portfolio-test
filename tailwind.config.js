/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_color: "#ffffff",
        block_color: "#171717",
        black_color: "#404040",
        green_color: "#4ce470",
        purple_color: "#6e30ef",
        grey_color: "#dbdbdb",
      },
    },
  },
  plugins: [],
};
