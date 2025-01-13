"use strict";
//const { context } = require("build/webpack.base.conf");
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");
const PosfixZero = function(num, n) {
  return (num + Array(n).join(0)).slice(0, n);
};
const getNowFormatDate = function() {
  let date = new Date();
  let seperator1 = "";
  let seperator2 = "";
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    "" +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds();
  return currentdate;
};
const version = PosfixZero(getNowFormatDate(), 14);
module.exports = {
  dev: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: [
      // "/cjunn": {
      //   target: "http://127.0.0.1:9090",
      // },
      {
        context:['/api'],
        target: 'https://api.cnblogs.com/api',
        secure:true ,//接受对方是https的接口
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      {
        context:['/newjersey'],
        target: 'https://www.cnblogs.com/newjersey',
        secure:true ,//接受对方是https的接口
        changeOrigin: true,
        pathRewrite: { '^/newjersey': '' },
      }
    ],

    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: "eval-cheap-module-source-map",
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist/releases"),
    assetsSubDirectory: version,
    assetsPublicPath: "../../",

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    //bundleAnalyzerReport: process.env.npm_config_report,
  },
};
