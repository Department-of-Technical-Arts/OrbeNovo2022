module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",

      md: "790px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1540px",
      "3xl": "1800px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.125rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
