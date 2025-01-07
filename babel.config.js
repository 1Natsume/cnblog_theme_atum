module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env",{'modules':false}], "@babel/preset-react",
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       use: [
  //         "vue-loader"
  //       ]
  //     },
  //   ],
  //   plugins: { 
  //     'autoprefixer': {browsers: 'last 5 version'} } 
  // }
}
