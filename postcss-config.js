const purgecss = require('@fullhuman/postcss-purgecss')

module.export = {
  plugins: {
    map: true,
    autoprefixer: {},
    purgecss: {
      content: [
        './**/*.twig.html',
        './**/*.tsx'
      ]
    }
  }
}
