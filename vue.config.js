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
    sourceMap: false, // 是否为 CSS 开启 source map
    loaderOptions: {
     postcss: {
      plugins: [
       require("postcss-px-to-viewport")({
        unitToConvert: "px",  // 需要转换的单位，默认为"px"
        viewportWidth: 375,  // 视窗的宽度，对应移动端设计稿的宽度，一般是375
        // viewportHeight:667,// 视窗的高度，对应的是我们设计稿的高度
        unitPrecision: 3,     // 单位转换后保留的精度
        propList: [       // 能转化为vw的属性列表
         "*"
        ],
        viewportUnit: "vw",       // 希望使用的视口单位
        fontViewportUnit: "vw",       // 字体使用的视口单位
        selectorBlackList: [],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        minPixelValue: 1,     // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
        replace: true,        // 是否直接更换属性值，而不添加备用属性
        exclude: /(\/|\\)(node_modules)(\/|\\)/,      // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
       })
      ]
     }
    }
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
