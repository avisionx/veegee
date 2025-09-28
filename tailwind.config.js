/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ['"League Spartan"', 'sans-serif'],
      body: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFA",
        black: "#373737",
        'text': '#373737',
        'background': '#f4f1ee',
        'primary': '#a22f1b',
        'secondary': '#093a7b',
        'accent': '#00B0FF',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
        '11xl': '120rem',
        '12xl': '130rem',
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite",
      },
    },
  },
  plugins: [],
};
