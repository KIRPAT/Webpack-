const path = require('path')

module.exports = {
  // Path aliases for clearer path finding. 
  resolve: {
    alias:{
      scripts: path.resolve(__dirname, 'src/scripts'),
      style: path.resolve(__dirname, 'src/style'),
      pug: path.resolve(__dirname, 'src/pug'),
      assets: path.resolve(__dirname, 'src/assets'),
    } 
  },

  //Gonna change entry points later. 
  //For now, every project is a one page.
  //In the future it will be one project with folder routing. 
  entry: {
    app: "./src/app.js",  // Your App Logic.
    vendor: "./src/vendor.js",  // 3rd Party NPM packages.
  },
  
  module: {
    rules: [       
      // 1)Require assets in the JS, 
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
        test: /\.pug$/,
        use: [
          "pug-loader"
        ]
      },
   ]
  },
};