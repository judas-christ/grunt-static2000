/*
 * grunt-static2000
 * https://github.com/judas-christ/grunt-static2000
 *
 * Copyright (c) 2015 Daniel H�gglund
 * Licensed under the MIT license.
 */

var static2000 = require('static2000');

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('static2000', 'Grunt plugin for Static2000', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      // templateAdapter: 'static2000-jade',
      // templates: path.join('src','templates'),
      // content: path.join('src','content')
    });

    var done = this.async();

    static2000(options, done, function(error) {
      grunt.log.error(error);
      done(false);
    });

    // Iterate over all specified file groups.
  //   this.files.forEach(function(f) {
  //     // Concat specified files.
  //     var src = f.src.filter(function(filepath) {
  //       // Warn on and remove invalid source files (if nonull was set).
  //       if (!grunt.file.exists(filepath)) {
  //         grunt.log.warn('Source file "' + filepath + '" not found.');
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     }).map(function(filepath) {
  //       // Read file source.
  //       return grunt.file.read(filepath);
  //     }).join(grunt.util.normalizelf(options.separator));

  //     // Handle options.
  //     src += options.punctuation;

  //     // Write the destination file.
  //     grunt.file.write(f.dest, src);

  //     // Print a success message.
  //     grunt.log.writeln('File "' + f.dest + '" created.');
  //   });
  });
};
