gulp = require 'gulp'
watch = require 'gulp-watch'
paths = require('../config').paths
runSequence = require 'run-sequence'

gulp.task 'watch', () ->

  watch ["#{paths.src.babel}/**/*.js"], () ->
    runSequence('babel')

  watch ["#{paths.src.jade}/**/!(_)*.jade"], () ->
    runSequence('jade')

  watch ["#{paths.src.stylus}/**/!(_)*.styl"], () ->
    runSequence('stylus')
