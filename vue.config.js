const { defineConfig } = require('@vue/cli-service')
const { data } = require('autoprefixer')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        additionalData:`@import '~@/components/scss/global.scss';`
      }
    }
  }
})
