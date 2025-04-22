/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm toàn bộ mã nguồn React
  ],
  darkMode: "class", // Kích hoạt dark mode bằng class
  theme: {
    extend: {}, // Có thể mở rộng sau
  },
  plugins: [],
};
