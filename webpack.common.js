const path = require('path')
const routes = require('./routes')

 
module.exports = {
  // Absolute Paths. 
  resolve: {
    alias:{
      scripts: path.resolve(__dirname, 'src/scripts'),
      style: path.resolve(__dirname, 'src/style'),
      pug: path.resolve(__dirname, 'src/pug'),
      assets: path.resolve(__dirname, 'src/assets'),
      pages: path.resolve(__dirname, 'src/pages')
    } 
  },

  entry: routes.entryPoints,
  
  module: {
    rules: [       
      // 1)Require the asset in the JS file, 
      // 2) ERROR! (JS doesn't know how to handle pictures.)
      // 3)Injected them in the HTML.
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      },

      // SOLUTION: For handling required assests. 
      {
        test:  /\.(eot|woff|ttf|svg|png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
      },

      { 
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            root: path.resolve(__dirname, 'src/components')
          }
        }
      },
   ]
  },
};
