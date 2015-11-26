gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
babelify = require 'babelify'
paths = require('../config').paths

gulp.task 'babel', ->
  browserify(
    entries: ["#{paths.src.babel}/core.js"]
    debug: true,
    extensions: ['.js'],
    detectGlobals: false,
    builtins: []
  )
  .transform(babelify.configure({
    presets: ["es2015", "react"]
  }))
  .bundle()
  .pipe(source('core.js'))
  .pipe(buffer())
  .pipe(gulp.dest("#{paths.dest.js}"))
