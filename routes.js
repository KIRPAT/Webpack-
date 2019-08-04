const HtmlWebpackPlugin = require("html-webpack-plugin");

//Define your routes in the "routes" object.
const routes = [
  {
    entryPoint: {
      name: "index", 
      dir: "./src/pages/index.js",
    },
    template: {
      dir: "./src/pages/index.pug",
      output: "index.html"
    } 
  },
  {
    entryPoint: {
      name: "about", 
      dir: "./src/pages/about/index.js",
    },
    template: {
      dir: "./src/pages/about/index.pug",
      output: "about/index.html"
    } 
  }
]

function generateEntryPoints() {
  let entryPoints = {
    common: "./src/scripts/common.js"
  }
  for (i of routes) {
    entryPoints[i.entryPoint.name] = i.entryPoint.dir
  }
  //console.log(entryPoints)
  return entryPoints
}

function generateTemplate(templateRoute, htmlOutput, entryPoint, isDev) {
  return isDev 
  ? new HtmlWebpackPlugin({ 
    template: `${templateRoute}`,
    chunks: [`${entryPoint}`, "common"],
    inject: 'footer', 
    filename: htmlOutput,
  })
  : new HtmlWebpackPlugin({ 
    template: `${templateRoute}`,
    chunks: [`${entryPoint}`, "common"],
    inject: 'footer', 
    filename: htmlOutput,
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    },
  })
}

function generateTemplates(isDev) {
  let templates = []
  for (i of routes) {
    templates.push(generateTemplate(i.template.dir, i.template.output, i.entryPoint.name, isDev))
  }
  //console.log(templates)
  return templates
}

exports.entryPoints = generateEntryPoints()
exports.devTemplates = generateTemplates(true)
exports.buildTemplates = generateTemplates(false)
//console.log("Inside routes: " +finalEntryPoints)