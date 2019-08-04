# tyniweb.js - Alpha v0.3
---

Not opinionated **tyni** static web site generator.

####  
* **Go pure HTML - CSS, or include some PUG templates / SASS components into the mix.**
  * ***Usage:*** 
    * Page spessific style file. (ex: aboutPage.css) ->  Import to "index.js" that is in the pages folder.  
    * Common style file (ex: layout.sass) -> Import to "common.js" that is in the script folder. 
* **You have a development server.**
  * That's right, you don't need to build the page every time to see if your changes are working.  (Default port "8080")
    ```
    npm run dev-server
    ```
* **You have routing.**
  * Take a look at the "routes.js". It is easy to understand.
  * ***Note:*** You specifically need to register a pug template and entry point in the router.js. This process can be tedious. I will look into folder based routing in the future. (Just like Next and Nuxt apps.)   
  * Exports multiple JS, CSS and HTML files.
    * ***Note:*** CSS files are always being exported in the root ("dist") directory. I want it to export CSS files to the html's direcory. 
  * Exports multiple HTML files according to "routes.js". 

* **Absolute Paths**
  * Relative paths are aweful! **"../../myJsFile.js"** is not a good way to import things. Use absolute paths like "pages/" and "scripts/" instead. The full list is in the webpack.common.js file. They even work on SASS/SCSS files and Pug templates.  

* **CSS - SASS (.scss & .sass)**
  * Local-fonts: You need to write a @font-face for your fonts.
  * Has Autoprefixer. Do not worry about vendor prefixes.

* **PUG (Markup)**
  * Embedded Resources: 
  ```
  img(src=require("assets/image.png"))
  ```

## Future Plans
--- 
* A Markup detection script that turns ".md" files into blog posts and manages slugs.

**Install Dependencies:** Do this first.
```
npm i
```

**Development Server:** Default port is 8080. (Go to "localhost:8080" on the browser.)
```
npm run dev-server
```

**Production Build:** JS, CSS and used asset file names are hashed for browser cache busting. JS and CSS files are minified. Exports into the "dist" folder.
```
npm run build
```

**Dev Build:** No minification, "dev_build" folder.
```
npm run dev
```
