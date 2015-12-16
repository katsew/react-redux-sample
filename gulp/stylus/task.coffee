gulp = require 'gulp'
stylus = require 'gulp-stylus'
autoPrefixer = require 'gulp-autoprefixer'
csscomb = require 'gulp-csscomb'
cssmin = require 'gulp-cssmin'
gzip = require 'gulp-gzip'
paths = require('../config').paths


gulp.task 'stylus', () ->
  return gulp.src ["#{paths.src.stylus}/!(block|deps|element|reset|util)**/*.styl", "#{paths.src.stylus}/core.styl", "#{paths.src.stylus}/sp.styl"]
    .pipe stylus
      compress: true
    .pipe autoPrefixer({
      browsers: ['last 3 version', 'Android 2.3']
    })
    .pipe csscomb()
    .pipe cssmin()
    .pipe gulp.dest "#{paths.dest.css}"
    .pipe gzip({ append: true })
    .pipe gulp.dest "#{paths.dest.css}"
