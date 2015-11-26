gulp = require 'gulp'
browserSync = require 'browser-sync'
paths = require('../config').paths

gulp.task 'browserSync', ->
  browserSync.init({
      server: {
        baseDir: './public'
      }
  })

  gulp.watch(["#{paths.dest.html}/**/*.html", "#{paths.dest.js}/**/*.js", "#{paths.dest.css}/**/*.css"])
    .on 'change', browserSync.reload
