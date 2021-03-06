// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

exports.config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/mixins.scss'
      ]
    })
  ]
};
