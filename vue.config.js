module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: "http://192.168.1.6:3000/",
        changOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
