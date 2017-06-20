const path = require("path"),
  _ = require("lodash"),
  webpack = require("webpack"),
  base = require("./base"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

/** Base Config */
module.exports = {
  target: "bundles",
  context: path.resolve(__dirname, "../sources"),
  entry: {
    app: "./app.js",
    vendor: [
      "jquery", "lodash", "moment", "element-ui",
      "vue", "vuex", "vue-router", "vue-resource",
      "echarts"
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  plugins: {
    HtmlWebpackPlugin: new HtmlWebpackPlugin({
      favicon: "assets/favicon.ico",
      template: "index.html",
      filename: "index.html"
    }),
    CommonsChunkPlugin: new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
  },
  module: {
    rules: {
      "vue-loader": {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: true
        }
      },
      "babel-loader": {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      "style-css-loader": {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    }
  }
}
