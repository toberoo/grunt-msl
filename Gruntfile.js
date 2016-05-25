/*
 * grunt-msl
 * http://github.com/toberoo/grunt-msl
 *
 * Copyright (c) 2016 Shehroze Khan
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'bin/grunt-init',
        'tasks/**/*.js',
        'init/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    msl: {
      options: {
        port: 3000,
        debug: false
      },
      baseDir: __dirname + '/test/test_server'
    },

    //Run tests
    protractor: {
      options: {
        configFile: __dirname + '/test/conf.js',
        keepAlive: false
      },
      all: {}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'msl', 'protractor']);
};
