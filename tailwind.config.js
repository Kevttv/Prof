/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        firstColor:{
          fC: "#1363df"
        },
        secondColor:{
          sC: "#47b5ff"
        },
        thirdColor:{
          tC: "#f33535"
        },
        graytColor:{
          gC: "70727c"
        },
        dakColor:{
          dC: "#191b21"
        }
      }
    },
  },
  plugins: [],
}
