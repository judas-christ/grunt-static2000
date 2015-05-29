/*
 * grunt-static2000
 * https://github.com/judas-christ/grunt-static2000
 *
 * Copyright (c) 2015 Daniel Hägglund
 * Licensed under the MIT license.
 */

var static2000 = require('static2000');

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('static2000', 'Grunt plugin for Static2000', function() {

    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      dest: 'www'
    });

    //for some reason vinyl-fs fails to write files from static2000, do it from here instead
    var dest = options.dest;
    delete options.dest;

    static2000(options)
      .pipe(fs.dest(dest))
      .on('end', done)
      .on('error', function(error) {
        grunt.log.error(error);
        done(false);
      });

  });
};
