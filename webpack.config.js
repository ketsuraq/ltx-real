const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
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
