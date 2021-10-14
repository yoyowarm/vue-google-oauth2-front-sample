const ansiRegex = require('ansi-regex')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  transpileDependencies: [ansiRegex],
  publicPath: process.env.NODE_ENV === 'production' ?
    '/vue-google-oauth2-front-sample/' :
    '/',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false,
  // devServer: {
  //     port: port,
  //     open: true,
  //     overlay: {
  //         warnings: false,
  //         errors: true
  //     },
  //     disableHostCheck: true
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    module: {
      rules: [{
        test: /\.json$/,
        loader: 'url-loader',
        // options: {
        //     limit: 10000,
        //     name: '/static/json/[name].[hash:7].[ext]'
        //         // name: utils.assetsPath('json/[name].[hash:7].[ext]')
        // }
      }]
    }
  },
  chainWebpack(config) {
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.module
      .rule('json')
      .test(/\.json$/)
      .include.add(resolve('src/assets')) //处理svg目录
      .end()
    // .use('url-loader')
    // .loader('url-loader')
    // .options({
    //     limit: 10000,
    //     name: `static/json/[name].[hash:7].[ext]`
    // })
    // .end()
  }
}