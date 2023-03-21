/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        100: "25rem",
        108: "27rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
