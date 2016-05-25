Grunt plugin for running a msl server. Please see http://finraos.github.io/MSL/gettingstarted.html for more information.

	module.exports = function(grunt) {

		//Add to config
	  	grunt.initConfig({
			msl: {
			  options: {
			    port: /*Port to run server on*/,
			    debug: /*Set to 'true' or 'false'*/
			  },
			  target: /*Location of project to wrap msl around*/
			}
		});

		//Load task
		grunt.loadNpmTasks('grunt-msl');
		grunt.registerTask('default', ['msl']);
	}

Tests are written using protractor. This requires an instance of a selenium server in order to run.
