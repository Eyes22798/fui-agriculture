const path = require('path')
// const apiRoot = process.env.NODE_ENV === 'development' ? '' : '101.42.242.59:80'
// const apiRoot = process.env.NODE_ENV === 'development' ? 'http://mock.eyesky.site/mock/11' : '101.42.242.59:80'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.42.242.59:80/', // 对应自己的接口  http://www.mock.eyesky.site/mock/11
        changeOrigin: true,
        ws: false
      }
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
  }
}
