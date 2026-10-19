export default {
  // Cypress's script rewriting breaks percy.io's module loader
  // ("Could not find module @sentry/browser"); the page loads fine without it.
  modifyObstructiveCode: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}
