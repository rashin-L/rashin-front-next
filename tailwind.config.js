/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); // Import plugin correctly 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
            textShadow: {
              sm: '0 1px 2px var(--tw-shadow-color)',
              DEFAULT: '0 2px 4px var(--tw-shadow-color)',
              lg: '0 8px 16px var(--tw-shadow-color)',
      },

      fontFamily: {
        "Yekan-Bakh" : "Yekan Bakh",
        "Yekan-Bakh-regular" : "Yekan Bakh regular",
        "Yekan-Bakh-bold" : "Yekan Bakh bold",

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins:[]
//  plugins: [
//     plugin(function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           'text-shadow': (value) => ({
//             textShadow: value,
//           }),
//         },
//         { values: theme('textShadow') }
//       )
//     }),
//   ],
};
