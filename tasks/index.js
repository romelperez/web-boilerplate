/*!
 * Grunt file.
 */

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-remove');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');


  //
  // TASKS CONFIGURATIONS
  //

  grunt.initConfig({

    browserify: {
      'app-vendor': {
        src: [
          './bower_components/jquery/dist/jquery.min.js'
        ],
        dest: './build/js/vendor.js'
      },
      app: {
        options: {
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
        src: './src/js/main.js',
        dest: './build/js/main.js'
      }
    },

    concat: {
      app: {
        src: [
          './build/js/vendor.js',
          './build/js/main.js'
        ],
        dest: './assets/js/app.js',
      }
    },

    uglify: {
      app: {
        src: './assets/js/app.js',
        dest: './assets/js/app.min.js'
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

    cssmin: {
      app: {
        files: [{
          expand: true,
          cwd: './assets/css',
          src: [
            '*.css',
            '!*.min.css'
          ],
          dest: './assets/css',
          ext: '.min.css'
        }]
      }
    },

    remove: {
      app: {
        options: {
          trace: true
        },
        fileList: [
          // JS
          './assets/js/app.js',
          // CSS
          './assets/css/app.css'
        ]
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
          message: 'JavaScript files have been re-built.'
        }
      },
      'css': {
        options: {
          title: 'CSS',
          message: 'CSS files have been re-built.'
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
    'concat',
    'uglify',
    'remove',
    'notify:js'
  ]);

  grunt.registerTask('build:css', [
    'compass',
    'cssmin',
    'remove',
    'notify:css'
  ]);

  grunt.registerTask('default', [
    'watch'
  ]);
};
