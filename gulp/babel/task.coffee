gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
babelify = require 'babelify'
paths = require('../config').paths

gulp.task 'babel', ->
  browserify(
    entries: ["#{paths.src.babel}/core.js"],
    debug: true,
    extensions: ['.js']
  )
  .transform(babelify.configure({
    global: true,
    presets: ["es2015", "react"]
  }))
  .bundle()
  .pipe(source('core.js'))
  .pipe(gulp.dest("#{paths.dest.js}"))
