'use strict'

const path = require('path')
const port = 1237 // 开发环境的端口号
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? `/` : process.env.VUE_APP_PUBLIC_PATH, // 设置打包后的文件路径
  outputDir: 'hello',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: process.env.NODE_ENV === 'development', // 为false,浏览器就不会展示源文件
  css: {
    extract: process.env.NODE_ENV === 'production',
    sourceMap: false // 是否为 CSS 开启 source map
  },
  devServer: {
    open: false,
    port
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log('生产环境')
    } else {
      console.log('非生产环境')
    }
  },
  chainWebpack: config => {
    // 设置浏览器标题栏名字
    config.plugin('html').tap(tit => {
      tit[0].title = 'test vue'
      return tit
    })
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}
