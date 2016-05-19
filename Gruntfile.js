module.exports = function(grunt) {
    grunt.initConfig({
        stylus: {
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    'public/css/index.css': ['public/styl/*.styl']
                }]
            }
        },
        watch: {
            another: {
                files: ['public/styl/*.styl'],
                tasks: ['stylus'],
                options: {
                    livereload: 9527
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    
    grunt.registerTask('default', ['watch']);
};