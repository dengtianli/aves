const gulp = require("gulp"),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config.js"),
  webpackDevServer = require("webpack-dev-server");

  gulp.task("default", function () {
    const compiler = webpack(webpackConfig);
    const server = new webpackDevServer(compiler, {
      hot: true,
      contentBase: "./sources",
      publicPath: "/bundles/",
      stats: {
        colors: true
      }
    });
    server.listen(8000, "127.0.0.1", function () {
      console.log("Starting server on http://localhost:8000");
    });
  });