module.exports = {
  //Gonna change entry points later.
  entry: {
    app: "./src/app.js",
    vendor: "./src/vendor.js",
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
        test:  /\.(svg|png|jpe?g|gif)$/,
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