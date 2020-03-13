// ---------------------------vue config------------------------------------
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const gzipSourceList = ['css', 'js']
module.exports = {
  publicPath: '',
  assetsDir: '',
  indexPath:'index.html',
  lintOnSave: false,
  configureWebpack: config => { // open gzip
    console.log('=========='+process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]', // 目标资源文件名称
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' + gzipSourceList.join('|') + ')$'
            ), // 匹配所有对应的文件
            threshold: 10240, // 多少kb 配置10kb
            minRatio: 0.8, // 压缩比例
            deleteOriginalAssets: false // 是否删除原始资源
          })
        ]
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({remUnit: 75}), // 换算的基数
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
