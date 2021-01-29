module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito"],
        serif: ["Nunito"],
        mono: ["SFMono-Regular", "Menlo"],
        nunito: ["Nunito"],
      },
      colors: {
        dark: {
          300: "#2D303E",
          500: "#252836",
          900: "#1F1D2B",
        },
        light: {
          100: "#F4F5F9",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
