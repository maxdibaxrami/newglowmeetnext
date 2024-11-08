import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {
            space: {
              xs: "0.25rem",
              sm: "0.5rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            },
            // More layout properties
          },
          colors: {
            primary: "#A594F9",
            secondary: "#f78ce2",
            success: "#00ba96",
            danger: "#be4541",
            warning: "#ffd16b",
            info: "#3b97eb",
            light: "#f4f4f4",
            dark: "#343a40",
            background: "#fcf7ffa3", 
            foreground: "#000", 
          },
          typography: {
            fontFamily: "system-ui, sans-serif",
            fontSize: "1rem",
            fontWeight: {
              light: "300",
              normal: "400",
              medium: "500",
              bold: "700",
            },
            // Other typography options
          },
          borders: {
            radius: {
              sm: "4px",
              md: "8px",
              lg: "16px",
            },
            width: "1px",
            color: "#e0e0e0",
          },
          shadows: {
            xs: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            sm: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            md: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          },
          // Additional properties for hover, focus, active states
        },
        dark: {
          layout: {
            space: {
              xs: "0.25rem",
              sm: "0.5rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            },
            // Dark theme layout properties
          },
          colors: {
            primary: "#A594F9",
            secondary: "#f78ce2",
            success: "#00ba96",
            danger: "#be4541",
            warning: "#ffd16b",
            info: "#4596f2",
            light: "#f4f4f4",
            dark: "#343a40",
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE",
            // Shadows, gradients, and border colors for dark mode
          },
          typography: {
            fontFamily: "system-ui, sans-serif",
            fontSize: "1rem",
            fontWeight: {
              light: "300",
              normal: "400",
              medium: "500",
              bold: "700",
            },
            // Dark mode typography options
          },
          borders: {
            radius: {
              sm: "4px",
              md: "8px",
              lg: "16px",
            },
            width: "1px",
            color: "#333333",
          },
          shadows: {
            xs: "0px 2px 4px rgba(0, 0, 0, 0.3)",
            sm: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            md: "0px 8px 16px rgba(0, 0, 0, 0.3)",
          },
          // Additional properties for hover, focus, active states
        },
      }
    })
  ]
}
