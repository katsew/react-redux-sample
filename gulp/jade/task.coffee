gulp = require 'gulp'
rawJade = require 'jade'
jade = require 'gulp-jade'
paths = require('../config').paths

gulp.task 'jade', () ->
  gulp.src ["#{paths.src.jade}/**/!(_)*.jade", "!#{paths.src.jade}/layouts/*.jade", "!#{paths.src.jade}/includes/*.jade"]
    .pipe jade
      jade: rawJade
      pretty: true
    .pipe gulp.dest "#{paths.dest.html}"
