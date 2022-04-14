const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    //跨域
    proxy: {
      'api': {
        //目标路径
        target: 'http://news-at.zhihu.com/',
        // 允许跨域
        changeOrigin: true,
        // 重写路径
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

})
