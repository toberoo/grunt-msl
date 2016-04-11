'use strict';
var colors = require('colors');
var server = require(__dirname + '/../node_modules/msl-server/web-server.js');

module.exports = function(grunt) {
  grunt.registerMultiTask('msl', 'Grunt runner for MSL.', function() {
    var done = this.async();
    
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port: 8000,
      debug: false,
      basedir: __dirname
    });

    var basedir = this.data;

    if (basedir == null) {
      grunt.fail.fatal('No target defined. Please set a basedir', 1);
    }

    grunt.log.writeln(colors.green('Starting MSL server on port: '));

    server({
      port: 3000,
      basedir: basedir,
      debug: 'true'
    }, function(args) {
      done();
    });

  });
};
