module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        // base
        "light": "#f7f5f6",
        "dark": "#3d3d3d",
        // gray
        "gray": {
          400: "#E3E3E3",
          500: "#D9D9D9",
          600: "#CCCCCC",
        },
        // blue
        "blue": {
          400: "#CCE9F2",
          500: "#0483cb",
          700: "#0B5986",
        },
        // orange
        "orange": { 500: "#d97706" },
        // yellow
        "yellow": { 500: "#fef3c7" },
        // red
        "red": {
          400: "#FFE4EB",
          500: "#FF1D48",
        },
        // green
        "green": {
          400: "#D1FAE5",
          500: "#059669",
        },
      },
    },
  },
  plugins: [],
};
