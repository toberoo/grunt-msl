Grunt plugin for running msl tests.

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
