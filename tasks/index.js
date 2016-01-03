/*!
 * Tasks.
 */

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');


  //
  // TASKS CONFIGURATIONS
  //

  grunt.initConfig({

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          [
            'babelify',
            {
              presets: [
                'es2015',
                'react'
              ]
            }
          ]
        ]
      },
      app: {
        src: './src/js/app.js',
        dest: './assets/js/app.js'
      }
    },

    compass: {
      app: {
        options: {
          sassDir: './src/scss',
          cssDir: './assets/css'
        }
      }
    },

    // General watchers.
    watch: {
      'js': {
        files: ['./src/js/**/*.js'],
        tasks: ['build:js'],
        options: {
          spawn: false
        }
      },
      'css': {
        files: ['./src/scss/**/*.scss'],
        tasks: ['build:css'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

    // General messages.
    notify: {
      'js': {
        options: {
          title: 'JavaScript',
          message: 'OK'
        }
      },
      'css': {
        options: {
          title: 'CSS',
          message: 'OK'
        }
      }
    }
  });


  //
  // TASKS
  //

  grunt.registerTask('build', [
    'build:js',
    'build:css'
  ]);

  grunt.registerTask('build:js', [
    'browserify',
    'notify:js'
  ]);

  grunt.registerTask('build:css', [
    'compass',
    'notify:css'
  ]);

  grunt.registerTask('default', [
    'watch'
  ]);
};
