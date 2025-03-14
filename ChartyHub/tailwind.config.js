/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", 
    "./src/components/ui/**/*.tsx"
  ],
  theme: {
    extend: {colors: {
      primary: "#3498db", // استبدل هذا باللون المطلوب
    },},
  },
  plugins: [],
};
