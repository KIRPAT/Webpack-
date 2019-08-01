# Webpack 4 - Barebone Setup - v1.1
---

I have configured a webpack setup for one of my dev scenarios.

* CSS - SASS (.scss & .sass)
* PUG (Markup)
  * Embedded Resources: 
  ```
  img(src=require("./my/image.png"))
  ```

## Future Plans
---
* Adding static web site generating features.
  * Adding support for basic folder based routing.
    * Exporting multiple HTML-CSS-JS in one go.
  * A Markup detection script that turns them into blog posts and manages slugs.
  * Basic theme support.

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
