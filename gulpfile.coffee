gulp = require 'gulp'
runSequence = require 'run-sequence'
gulp._maxListeners = 30

requireDir = require 'require-dir'
dir = requireDir('./gulp', {recurse: true})

gulp.task 'default', ->
  runSequence(
    ['jade', 'stylus', 'babel']
  )
