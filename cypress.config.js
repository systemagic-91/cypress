const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity:false,
  defaultCommandTimeout:10000,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.saucedemo.com/'
  },
});
