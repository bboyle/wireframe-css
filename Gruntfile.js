'use strict';

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON( 'bower.json' ),


    jshint: {
      gruntfile: {
        options: { jshintrc: '.jshintrc' },
        src: [
          'Gruntfile.js',
          'package.json',
          'bower.json',
          'test/.jshintrc',
          '.jshintrc'
        ]
      },
      test: {
        options: { jshintrc: 'test/.jshintrc' },
        src: 'test/**.js'
      },
    },

    // acceptance tests
    phantomcss: {
      options: {
        // http://casperjs.readthedocs.org/en/latest/logging.html
        logLevel: 'warning'
      },
      wireframe: {
        options: {
          viewportSize: [ 768, 1024 ],
          screenshots: 'test/screenshots/',
          results: 'tmp/'
        },
        src: [ 'test/phantomcss.js' ]
      },
    },

  });


  // These plugins provide necessary tasks
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-phantomcss' );


  // build targets
  grunt.registerTask( 'test', [ 'jshint', 'phantomcss' ]);

  // default task
  grunt.registerTask( 'default', [ 'test' ]);

};
