const unit2rem = require('postcss-plugin-px2rem')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')(),
          unit2rem({
            rootValue: 75
          })
        ]
      }
    }
  }
}
