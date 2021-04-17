module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer:{
    host:"localhost",
    port:"8080",
    proxy:{
      '/api':{
        target: "http://localhost:3000/",
        changOrigin:true,
        pathRewrite:{
          '^/api':'/' 
        }
      }
    }
  }
}
