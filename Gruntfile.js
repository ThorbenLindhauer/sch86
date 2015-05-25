module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      files: {
        cwd: 'assets/img/',
        src: '**/*',
        dest: 'dist/assets/img/', 
        expand: true
      }
    },
    less:  {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/assets/css/main.css": "assets/css/main.less",
          "dist/assets/css/print.css": "assets/css/print.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['css/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('kartoffeldruck', function() {
    var kartoffeldruck = require('kartoffeldruck');
    kartoffeldruck.run({
      logger: {
        log: grunt.log.ok
      }
    });
  });

  grunt.registerTask('build', function(target) {
    grunt.task.run('kartoffeldruck');
    grunt.task.run('less');
    grunt.task.run('copy');
  });

  grunt.registerTask('auto-build', ['watch']);

}

