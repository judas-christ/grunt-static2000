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

    static2000(options)
      .on('end', done)
      .on('error', function(error) {
        grunt.log.error(error);
        done(false);
      });

  });
};
