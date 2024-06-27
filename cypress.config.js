const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:8083",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
