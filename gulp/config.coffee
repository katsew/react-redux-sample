paths = {}
paths.src =
  jade: "views"
  stylus: "assets/stylus"
  babel: "assets/babel"
  image: "assets/image"

paths.dest =
  html: "public"
  css: "public/assets/css"
  js: "public/assets/js"
  image: "public/assets/image"

module.exports =
  paths: paths
