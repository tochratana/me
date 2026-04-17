const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "km"],
  },
  ns: ["common"],
  defaultNS: "common",
  localePath: path.resolve("./locales"),
  react: {
    useSuspense: false,
  },
};
