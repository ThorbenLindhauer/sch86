module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      files: {
        cwd: 'img/',
        src: '**/*',
        dest: 'dist/img/', 
        expand: true
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
    grunt.task.run('copy');
  });
}

