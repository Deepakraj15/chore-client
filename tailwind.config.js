/** @type {import('tailwindcss').Config} */
import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  safelist: [
  {
    pattern:
      /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
  },
  ],
  theme: {
    extend: {
      colors: {
         primary: "#4169e1", // Royal Blue
        secondary: "#778899", // LightSlateGrey

        // Backgrounds
        background: {
          light: "#ffffff",
          dark: "#000000",
          muted: "#f4f4f5", // light muted grey
        },

        // Accent colors (optional)
        accent: {
          blue: "#3b82f6",    // Tailwind blue-500
          green: "#10b981",   // Tailwind green-500
          red: "#ef4444",     // Tailwind red-500
          yellow: "#facc15",  // Tailwind yellow-400
        },

        // Text colors
        text: {
          base: "#1f2937",        // gray-800
          muted: "#6b7280",       // gray-500
          inverted: "#ffffff",    // white for dark bg
        },
       
      },
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
    },
  },
  plugins: [gluestackPlugin],
}