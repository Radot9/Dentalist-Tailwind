/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        purple: "#583FBC",
        "baby-blue": "#DBEFFA",
        "purple-light": "#DBDEFA",
        "pink": "#F6DBFA",
        "charm-pink": "#FADBE2",
        "body-blue": "#181945",
        "navy-blue": "#041434",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
