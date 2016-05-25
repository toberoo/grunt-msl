'use strict';

var server = require(__dirname + '/../node_modules/msl-server/web-server');

module.exports = function(grunt) {
  grunt.registerMultiTask('msl', 'Grunt runner for MSL.', function() {
    var done = this.async();

    //Get the directory for the tests
    var basedir = this.data || __dirname;

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port: 8000,
      debug: false,
      basedir: basedir
    });
    server(options, done);
  });
};
