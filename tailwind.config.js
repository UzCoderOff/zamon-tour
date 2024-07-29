const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4EC2CD",
      },
    },
    screens: {
      vsm: "400px",
      md: "768px",
      lg: "1024px",
      sm: "640px",
      xl: "1414px",
    },
  },
  plugins: [],
});
