const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public"),
  },
  // how to use babel-loader with webpack?
  // rules: [
  //   {
  //     test: /\.(?:js|mjs|cjs)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: "babel-loader",
  //       options: {
  //         presets: [["@babel/preset-env", { targets: "defaults" }]],
  //       },
  //     },
  //   },
  // ],
};
