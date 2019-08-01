const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  //devtool: "none",

  output: {
    filename: "[name].bundle.js", // Content Hash prevents the browser from using the wrong js file from the cache.
    path: path.resolve(__dirname, "dev_build")
  },

  plugins: [
    //Exports an HTML in div.
    new HtmlWebpackPlugin({ 
      template: "./src/index.pug" // Initial Template
    }),
    
    //Modifies original CSS.
    new webpack.LoaderOptionsPlugin({
      options: {
        // Adds browser prefixes.
        postcss: [
          autoprefixer({grid: true})
        ]
      }
    })
  ],

  module: {
    rules: [
      //CSS
      {
        test: /\.css$/,
        use: [             //The order is important.
          "style-loader",  //  2) injects CSS into the DOM
          "css-loader",    //  1) takes CSS and turns it into JS
          "postcss-loader" //  0) Modifies the final CSS
        ]
      },
      
      //SASS
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader", // 4) creates style nodes from JS strings
          "css-loader",   // 3) translates CSS into CommonJS
          "postcss-loader", //  2) Modifies the final CSS
          "sass-loader",   // 1) compiles Sass to CSS, using Node Sass by default
        ]
      },
    ]
  },
});
