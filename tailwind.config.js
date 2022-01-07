module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        cultured: "#f9f8f8",
        "raisin-black": "#272838",
        "shamrock-green": "#499f68",
        "cg-blue": "#1282a2",
        goldenrod: "#e6af2e",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
