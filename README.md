# Webpack 4 - Barebone Setup - v1.0
---

I have configured a webpack setup for one of my dev scenarios.

* SASS (CSS)
* PUG (Markup)
  * Embedded Resources: 
  ```
  img(src=require("./my/image.png"))
  ```

**Install Dependencies:** Do this first.
```
npm i
```

**Development Server:** On the port "8080".
```
npm run dev-server
```

**Production Build:** Everything is minified in the "dist" folder.
```
npm run build
```

**Dev Build:** No minification, "dev_build" folder.
```
npm run dev
```